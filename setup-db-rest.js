// Node 22 has built-in fetch

const supabaseUrl = 'https://xmuatibqhixwopayyguh.supabase.co';
const serviceRoleKey = process.argv[2];

if (!serviceRoleKey) {
  console.error('❌ Service role key required');
  process.exit(1);
}

async function createTable() {
  try {
    console.log('📊 Setting up bot_data table via REST API...');

    // Try to create the table by inserting a test record first to initialize the table
    // This is a workaround since Supabase REST API doesn't directly support DDL

    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }

    console.log('✅ bot_data table created!');
    console.log('🎉 Database setup complete!');

  } catch (err) {
    console.error('⚠️  REST API method unavailable, trying alternative...');

    // Fallback: provide manual instructions
    console.log(`
╔════════════════════════════════════════════════════════════╗
║  MANUAL SETUP REQUIRED                                     ║
║════════════════════════════════════════════════════════════║
║                                                            ║
║ Go to: https://app.supabase.com                           ║
║ 1. Select your project (xmuatibqhixwopayyguh)            ║
║ 2. Click "SQL Editor" (left sidebar)                      ║
║ 3. Click "New Query"                                      ║
║ 4. Run: supabase/migrations/003_create_bot_data_table.sql ║
║                                                            ║
║ Then come back and sync your Landbot data!                ║
╚════════════════════════════════════════════════════════════╝
    `);
  }
}

createTable();
