-- Create bot_data table for Landbot leads/conversations
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

-- Create index for faster queries
CREATE INDEX idx_bot_data_email ON bot_data(email);
CREATE INDEX idx_bot_data_created_at ON bot_data(created_at);
CREATE INDEX idx_bot_data_status ON bot_data(status);
CREATE INDEX idx_bot_data_external_id ON bot_data(external_id);

-- Optional: Create a summary view for agent queries
CREATE OR REPLACE VIEW bot_stats AS
SELECT
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'new' THEN 1 END) as new_leads,
  COUNT(CASE WHEN status = 'contacted' THEN 1 END) as contacted_leads,
  COUNT(CASE WHEN email IS NOT NULL THEN 1 END) as leads_with_email,
  DATE(created_at) as date
FROM bot_data
GROUP BY DATE(created_at);
