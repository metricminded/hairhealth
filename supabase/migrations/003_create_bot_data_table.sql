-- Create bot_data table for Landbot conversations and leads
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

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_bot_data_email ON bot_data(email);
CREATE INDEX IF NOT EXISTS idx_bot_data_created_at ON bot_data(created_at);
CREATE INDEX IF NOT EXISTS idx_bot_data_status ON bot_data(status);
CREATE INDEX IF NOT EXISTS idx_bot_data_external_id ON bot_data(external_id);
