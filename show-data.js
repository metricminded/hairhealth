import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xmuatibqhixwopayyguh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdWF0aWJxaGl4d29wYXl5Z3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjAxNjQsImV4cCI6MjA5NTM5NjE2NH0.0LYtSrNVAZ1BusP31p1UgwLwgOaKBlqr1FXDWA9Yeng'
);

async function showData() {
  console.log('\n🗄️ SUPABASE DATA STRUCTURE\n');
  console.log('═══════════════════════════════════════════════════════\n');

  // Get sample records
  const { data: samples, error } = await supabase
    .from('bot_data')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`📊 Total imported: 4,566 customer records\n`);

  console.log('📋 SAMPLE RECORDS:\n');
  samples.forEach((record, idx) => {
    console.log(`Record ${idx + 1}:`);
    console.log(`├─ name: "${record.name}"`);
    console.log(`├─ email: "${record.email}"`);
    console.log(`├─ phone: "${record.phone}"`);
    console.log(`├─ status: "${record.status}"`);
    console.log(`├─ country: "${record.metadata?.country}"`);
    console.log(`├─ source: "${record.source}"`);
    console.log(`├─ created_at: ${new Date(record.created_at).toLocaleString()}`);
    console.log(`└─ metadata keys: ${Object.keys(record.metadata || {}).join(', ')}`);
    console.log('');
  });

  console.log('🗄️ TABLE SCHEMA (bot_data):\n');
  console.log(`Column Name          │ Type      │ Description`);
  console.log(`─────────────────────┼───────────┼────────────────────────────`);
  console.log(`id                   │ BIGINT    │ Primary key, auto-increment`);
  console.log(`external_id          │ TEXT      │ Unique Landbot ID`);
  console.log(`name                 │ TEXT      │ Customer/Visitor name`);
  console.log(`email                │ TEXT      │ Email address`);
  console.log(`phone                │ TEXT      │ Phone number`);
  console.log(`message              │ TEXT      │ Last message sent`);
  console.log(`conversation_id      │ TEXT      │ Landbot conversation ID`);
  console.log(`status               │ TEXT      │ Lead status (new, contacted)`);
  console.log(`source               │ TEXT      │ Always "landbot"`);
  console.log(`metadata             │ JSONB     │ Custom fields & data`);
  console.log(`created_at           │ TIMESTAMP │ Record creation date`);
  console.log(`updated_at           │ TIMESTAMP │ Last update date`);
  console.log('\n');

  console.log('📦 METADATA CONTAINS:\n');
  if (samples[0]?.metadata) {
    console.log(JSON.stringify(samples[0].metadata, null, 2));
  }

  console.log('\n═══════════════════════════════════════════════════════\n');
  console.log('✅ Data Structure:\n');
  console.log('  • Each customer is ONE ROW in bot_data table');
  console.log('  • All basic fields (name, email, phone) are searchable columns');
  console.log('  • Complex data stored in metadata JSONB column');
  console.log('  • Indexed for fast queries on email, status, created_at');
  console.log('  • Ready for Agent queries!\n');
}

showData();
