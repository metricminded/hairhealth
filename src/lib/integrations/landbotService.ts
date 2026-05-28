import { supabase } from '../supabase';

interface LandbotConversation {
  id: string;
  uuid?: string;
  created_at: string;
  updated_at: string;
  messages?: Array<{
    id: string;
    text: string;
    type: string;
    created_at: string;
  }>;
  custom_fields?: Record<string, any>;
}

interface BotDataRecord {
  external_id: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  conversation_id: string;
  status: string;
  source: string;
  metadata: Record<string, any>;
}

export class LandbotService {
  private apiKey: string;
  private baseUrl = 'https://api.landbot.io/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Fetch conversations from Landbot API
   */
  async fetchConversations(limit = 100): Promise<LandbotConversation[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/conversations?limit=${limit}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Landbot API error: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Failed to fetch Landbot conversations:', error);
      throw error;
    }
  }

  /**
   * Parse Landbot conversation data and format for Supabase
   */
  private parseConversation(conversation: LandbotConversation): BotDataRecord {
    // Extract custom fields
    const customFields = conversation.custom_fields || {};

    // Get the last message
    const lastMessage = conversation.messages?.[conversation.messages.length - 1];
    const messageText = lastMessage?.text || '';

    // Extract email from custom fields or message
    let email = customFields.email || customFields.visitor_email || '';
    if (!email && messageText.includes('@')) {
      const emailMatch = messageText.match(/[\w\.-]+@[\w\.-]+\.\w+/);
      email = emailMatch?.[0] || '';
    }

    // Extract name
    const name =
      customFields.name ||
      customFields.visitor_name ||
      customFields.full_name ||
      '';

    // Extract phone
    const phone =
      customFields.phone ||
      customFields.visitor_phone ||
      customFields.telephone ||
      '';

    return {
      external_id: conversation.id || conversation.uuid || '',
      name: name || undefined,
      email: email || undefined,
      phone: phone || undefined,
      message: messageText || undefined,
      conversation_id: conversation.id || conversation.uuid || '',
      status: 'new',
      source: 'landbot',
      metadata: {
        landbot_id: conversation.id,
        custom_fields: customFields,
        message_count: conversation.messages?.length || 0,
        created_at_original: conversation.created_at,
        updated_at_original: conversation.updated_at,
      },
    };
  }

  /**
   * Sync Landbot conversations to Supabase
   */
  async syncToSupabase(): Promise<{
    synced: number;
    updated: number;
    error: string | null;
  }> {
    try {
      // Fetch conversations from Landbot
      const conversations = await this.fetchConversations();

      if (conversations.length === 0) {
        return { synced: 0, updated: 0, error: null };
      }

      let syncedCount = 0;
      let updatedCount = 0;

      // Process each conversation
      for (const conversation of conversations) {
        const botData = this.parseConversation(conversation);

        // Try to insert or update
        const { data, error } = await supabase
          .from('bot_data')
          .upsert(
            {
              external_id: botData.external_id,
              name: botData.name,
              email: botData.email,
              phone: botData.phone,
              message: botData.message,
              conversation_id: botData.conversation_id,
              status: botData.status,
              source: botData.source,
              metadata: botData.metadata,
            },
            { onConflict: 'external_id' }
          )
          .select();

        if (error) {
          console.error(`Error syncing conversation ${botData.external_id}:`, error);
          continue;
        }

        if (data && data.length > 0) {
          if (data[0].created_at === data[0].updated_at) {
            syncedCount++;
          } else {
            updatedCount++;
          }
        }
      }

      return {
        synced: syncedCount,
        updated: updatedCount,
        error: null,
      };
    } catch (error) {
      return {
        synced: 0,
        updated: 0,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Get bot data statistics
   */
  async getStats() {
    try {
      const { data: stats, error } = await supabase
        .from('bot_stats')
        .select('*')
        .order('date', { ascending: false })
        .limit(30);

      if (error) throw error;
      return stats || [];
    } catch (error) {
      console.error('Failed to get bot stats:', error);
      return [];
    }
  }

  /**
   * Get recent leads from bot
   */
  async getRecentLeads(days = 7) {
    try {
      const since = new Date();
      since.setDate(since.getDate() - days);

      const { data: leads, error } = await supabase
        .from('bot_data')
        .select('*')
        .gte('created_at', since.toISOString())
        .order('created_at', { ascending: false });

      if (error) throw error;
      return leads || [];
    } catch (error) {
      console.error('Failed to get recent leads:', error);
      return [];
    }
  }

  /**
   * Get leads with email
   */
  async getLeadsWithEmail() {
    try {
      const { data: leads, error } = await supabase
        .from('bot_data')
        .select('*')
        .not('email', 'is', null)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return leads || [];
    } catch (error) {
      console.error('Failed to get leads with email:', error);
      return [];
    }
  }
}
