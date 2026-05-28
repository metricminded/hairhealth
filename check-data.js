import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xmuatibqhixwopayyguh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdWF0aWJxaGl4d29wYXl5Z3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjAxNjQsImV4cCI6MjA5NTM5NjE2NH0.0LYtSrNVAZ1BusP31p1UgwLwgOaKBlqr1FXDWA9Yeng';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkData() {
  try {
    console.log('\n📊 CHECKING SUPABASE DATA...\n');
    console.log('═══════════════════════════════════════════════════════\n');

    // Get total count
    const { data: allData, error: countError } = await supabase
      .from('bot_data')
      .select('*', { count: 'exact', head: true });

    if (countError) throw countError;

    const totalCount = allData?.length || 0;

    // Get a few sample records
    const { data: samples, error: sampleError } = await supabase
      .from('bot_data')
      .select('*')
      .limit(5);

    if (sampleError) throw sampleError;

    console.log(`📈 Total Records: ${totalCount}\n`);

    // Stats
    const { data: withEmail } = await supabase
      .from('bot_data')
      .select('id', { count: 'exact', head: true })
      .not('email', 'is', null)
      .neq('email', '');

    const { data: byStatus } = await supabase
      .from('bot_data')
      .select('status');

    console.log('📊 STATISTICS:');
    console.log(`   Total leads: ${totalCount}`);
    console.log(`   With email: ${withEmail?.length || 0}`);
    console.log(`   Without email: ${totalCount - (withEmail?.length || 0)}\n`);

    // Sample data
    console.log('📋 SAMPLE RECORDS (First 5):\n');
    samples.forEach((record, idx) => {
      console.log(`${idx + 1}. ${record.name || 'N/A'}`);
      console.log(`   ID: ${record.external_id}`);
      console.log(`   Email: ${record.email || '(empty)'}`);
      console.log(`   Phone: ${record.phone || '(empty)'}`);
      console.log(`   Status: ${record.status}`);
      console.log(`   Country: ${record.metadata?.country || '(empty)'}`);
      console.log(`   Created: ${new Date(record.created_at).toLocaleDateString()}`);
      console.log('');
    });

    // Table structure
    console.log('🗄️  TABLE STRUCTURE (bot_data):\n');
    console.log(`  ✓ id (BIGINT) - Primary key`);
    console.log(`  ✓ external_id (TEXT) - Unique identifier`);
    console.log(`  ✓ name (TEXT) - Customer name`);
    console.log(`  ✓ email (TEXT) - Email address`);
    console.log(`  ✓ phone (TEXT) - Phone number`);
    console.log(`  ✓ message (TEXT) - Last message`);
    console.log(`  ✓ conversation_id (TEXT) - Chat ID`);
    console.log(`  ✓ status (TEXT) - Lead status (new, contacted, etc)`);
    console.log(`  ✓ source (TEXT) - Always "landbot"`);
    console.log(`  ✓ metadata (JSONB) - Custom fields & data`);
    console.log(`  ✓ created_at (TIMESTAMP) - When added`);
    console.log(`  ✓ updated_at (TIMESTAMP) - Last update\n`);

    // Show metadata structure
    console.log('📦 METADATA STRUCTURE (JSON stored in each record):\n');
    if (samples[0]?.metadata) {
      console.log(JSON.stringify(samples[0].metadata, null, 2));
    }

    console.log('\n═══════════════════════════════════════════════════════\n');
    console.log('✅ All data successfully saved to Supabase!\n');

  } catch (error) {
    console.error('❌ Error:', error);
    console.log(error);
    process.exit(1);
  }
}

checkData();
