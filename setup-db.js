import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xmuatibqhixwopayyguh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdWF0aWJxaGl4d29wYXl5Z3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjAxNjQsImV4cCI6MjA5NTM5NjE2NH0.0LYtSrNVAZ1BusP31p1UgwLwgOaKBlqr1FXDWA9Yeng'
);

console.log('📊 Attempting to create bot_data table...');
console.log('Note: Direct SQL execution via anon key is limited.');
console.log('You may need to run this in Supabase SQL Editor manually.');
console.log('\nSQL to run:');

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

console.log(sql);
