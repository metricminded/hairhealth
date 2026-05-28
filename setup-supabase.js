import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xmuatibqhixwopayyguh.supabase.co';
const serviceRoleKey = process.argv[2];

if (!serviceRoleKey) {
  console.error('❌ Service role key required as argument');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function setupDatabase() {
  try {
    console.log('🔧 Creating bot_data table...');

    const { error } = await supabase.rpc('exec', {
      sql: `
        CREATE TABLE IF NOT EXISTS bot_data (
          id BIGSERIAL PRIMARY KEY,
          external_id TEXT UNIQUE,
          name TEXT,
          email TEXT,
          phone TEXT,
          message TEXT,
          conversation_id TEXT,
          status TEXT DEFAULT 'new',
          source TEXT DEFAULT 'landbot',
          metadata JSONB DEFAULT '{}'::jsonb,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
        );

        CREATE INDEX IF NOT EXISTS idx_bot_data_email ON bot_data(email);
        CREATE INDEX IF NOT EXISTS idx_bot_data_created_at ON bot_data(created_at);
        CREATE INDEX IF NOT EXISTS idx_bot_data_status ON bot_data(status);
        CREATE INDEX IF NOT EXISTS idx_bot_data_external_id ON bot_data(external_id);
      `
    });

    if (error) {
      console.error('❌ Error creating table:', error);
      // Try alternative approach
      console.log('📝 Using direct SQL query approach...');
      const { data, error: queryError } = await supabase
        .from('bot_data')
        .select('*')
        .limit(1);

      if (queryError && queryError.code === 'PGRST116') {
        console.error('⚠️ Table does not exist. Please create it manually in Supabase SQL Editor');
        console.error('Copy and run: supabase/migrations/003_create_bot_data_table.sql');
        process.exit(1);
      }
    }

    console.log('✅ bot_data table ready!');

  } catch (err) {
    console.error('❌ Setup error:', err.message);
    process.exit(1);
  }
}

setupDatabase();
