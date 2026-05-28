import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { parse } from 'csv-parse/sync';

const supabaseUrl = 'https://xmuatibqhixwopayyguh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdWF0aWJxaGl4d29wYXl5Z3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjAxNjQsImV4cCI6MjA5NTM5NjE2NH0.0LYtSrNVAZ1BusP31p1UgwLwgOaKBlqr1FXDWA9Yeng';

const supabase = createClient(supabaseUrl, supabaseKey);

async function importCSV(filePath) {
  try {
    console.log('📂 Reading CSV file...');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    console.log('🔄 Parsing CSV...');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    console.log(`📊 Found ${records.length} records\n`);

    let synced = 0;
    let updated = 0;
    let errors = 0;

    for (let i = 0; i < records.length; i++) {
      const record = records[i];

      try {
        const lead = {
          external_id: record['@id'] || record['@record_id'] || `csv_${i}`,
          name: record['@name'] || record['@default_name'] || 'Unknown',
          email: record['@email'] || '',
          phone: record['@phone'] || '',
          message: '',
          conversation_id: record['@record_id'] || record['@id'] || `csv_${i}`,
          status: 'new',
          source: 'landbot',
          metadata: {
            channel: record['@channel'] || 'landbot',
            country: record['@country'] || '',
            gender: record['@gender'] || '',
            date_registered: record['@date_registred'] || '',
            custom_fields: record,
          },
          created_at: new Date(record['@date_registred'] || new Date()),
          updated_at: new Date(),
        };

        const { data: existing } = await supabase
          .from('bot_data')
          .select('id')
          .eq('external_id', lead.external_id)
          .single();

        if (existing) {
          await supabase
            .from('bot_data')
            .update({
              name: lead.name,
              email: lead.email,
              phone: lead.phone,
              status: lead.status,
              metadata: lead.metadata,
              updated_at: new Date(),
            })
            .eq('external_id', lead.external_id);
          updated++;
        } else {
          await supabase
            .from('bot_data')
            .insert([lead]);
          synced++;
        }

        if ((i + 1) % 50 === 0) {
          console.log(`  ✓ Processed ${i + 1}/${records.length}`);
        }
      } catch (err) {
        console.error(`  ✗ Error on row ${i + 1}:`, err.message);
        errors++;
      }
    }

    console.log('\n✅ Import Complete!\n');
    console.log(`📊 Results:`);
    console.log(`   ✨ New leads imported: ${synced}`);
    console.log(`   🔄 Existing leads updated: ${updated}`);
    console.log(`   ❌ Errors: ${errors}`);
    console.log(`   📈 Total processed: ${synced + updated}\n`);

    // Get stats
    const { data: stats } = await supabase
      .from('bot_data')
      .select('*');

    if (stats) {
      const total = stats.length;
      const withEmail = stats.filter(d => d.email).length;
      const newLeads = stats.filter(d => d.status === 'new').length;

      console.log(`📈 Current Database State:`);
      console.log(`   Total leads: ${total}`);
      console.log(`   Leads with email: ${withEmail}`);
      console.log(`   New leads: ${newLeads}\n`);
    }

    console.log('🎉 All done! Your customer data is now in Supabase.\n');
    console.log('💡 Try asking the agent: "How many leads do we have?"');

  } catch (error) {
    console.error('❌ Import failed:', error.message);
    process.exit(1);
  }
}

const csvPath = process.argv[2] || './customers.csv';
importCSV(csvPath);
