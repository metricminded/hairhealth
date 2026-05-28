import pg from 'pg';
const { Client } = pg;

const serviceRoleKey = process.argv[2];

if (!serviceRoleKey) {
  console.error('❌ Service role key required');
  process.exit(1);
}

// Supabase PostgreSQL connection
const client = new Client({
  host: 'xmuatibqhixwopayyguh.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: serviceRoleKey,
  ssl: { rejectUnauthorized: false }
});

async function createTable() {
  try {
    console.log('🔌 Connecting to Supabase PostgreSQL...');
    await client.connect();
    console.log('✅ Connected!');

    console.log('🔧 Creating bot_data table...');

    const sql = `
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
    `;

    await client.query(sql);
    console.log('✅ bot_data table created successfully!');

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

createTable();
