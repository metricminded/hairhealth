import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xmuatibqhixwopayyguh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdWF0aWJxaGl4d29wYXl5Z3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjAxNjQsImV4cCI6MjA5NTM5NjE2NH0.0LYtSrNVAZ1BusP31p1UgwLwgOaKBlqr1FXDWA9Yeng';
const landbotKey = '8cf43087c063a1a029b17701d6e200e65933a581';

const supabase = createClient(supabaseUrl, supabaseKey);

class LandbotService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.landbot.io/v1';
  }

  async fetchConversations() {
    try {
      const response = await fetch(`${this.baseUrl}/conversations?per_page=100`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Landbot API error: ${response.status}`);
      }

      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching Landbot conversations:', error);
      throw error;
    }
  }

  parseConversationToLead(conversation) {
    const customFields = conversation.custom_fields || {};
    const messages = conversation.messages || [];
    const lastMessage = messages[messages.length - 1]?.message || '';

    return {
      external_id: conversation.id,
      name: customFields.name || customFields.visitor_name || 'Unknown',
      email: customFields.email || '',
      phone: customFields.phone || '',
      message: lastMessage,
      conversation_id: conversation.id,
      status: customFields.status || 'new',
      source: 'landbot',
      metadata: {
        custom_fields: customFields,
        messages_count: messages.length,
        last_message_sent_at: conversation.last_message_sent_at,
        created_at: conversation.created_at,
      },
      created_at: new Date(conversation.created_at),
      updated_at: new Date(),
    };
  }

  async syncToSupabase() {
    try {
      const conversations = await this.fetchConversations();
      let synced = 0;
      let updated = 0;

      for (const conversation of conversations) {
        const lead = this.parseConversationToLead(conversation);

        const { data: existing } = await supabase
          .from('bot_data')
          .select('id')
          .eq('external_id', lead.external_id)
          .single();

        if (existing) {
          const { error } = await supabase
            .from('bot_data')
            .update({
              name: lead.name,
              email: lead.email,
              phone: lead.phone,
              message: lead.message,
              status: lead.status,
              metadata: lead.metadata,
              updated_at: new Date(),
            })
            .eq('external_id', lead.external_id);

          if (!error) updated++;
        } else {
          const { error } = await supabase
            .from('bot_data')
            .insert([lead]);

          if (!error) synced++;
        }
      }

      return { synced, updated };
    } catch (error) {
      return {
        synced: 0,
        updated: 0,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}

async function syncLandbot() {
  try {
    console.log('🤖 Starting Landbot sync...\n');

    const service = new LandbotService(landbotKey);
    const result = await service.syncToSupabase();

    if (result.error) {
      console.error('❌ Error:', result.error);
      process.exit(1);
    }

    console.log('✅ Sync Complete!\n');
    console.log(`📊 Results:`);
    console.log(`   ✨ New leads synced: ${result.synced}`);
    console.log(`   🔄 Existing leads updated: ${result.updated}`);
    console.log(`   📈 Total processed: ${result.synced + result.updated}\n`);

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

    console.log('🎉 All done! Your Landbot data is now in Supabase.\n');
    console.log('💡 Try asking the agent: "How many bot leads do we have?"');

  } catch (error) {
    console.error('❌ Sync failed:', error);
    process.exit(1);
  }
}

syncLandbot();
