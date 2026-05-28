import { supabase } from '../supabase'

export interface LandbotConversation {
  id: string
  created_at: string
  last_message_sent_at: string
  custom_fields: Record<string, any>
  messages: Array<{ type: string; message: string }>
}

export interface BotLead {
  id?: string
  external_id: string
  name?: string
  email?: string
  phone?: string
  message?: string
  conversation_id: string
  status: string
  source: string
  metadata: Record<string, any>
  created_at: Date
  updated_at: Date
}

export class LandbotService {
  private apiKey: string
  private baseUrl = 'https://api.landbot.io/v1'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async fetchConversations(): Promise<LandbotConversation[]> {
    try {
      const response = await fetch(`${this.baseUrl}/conversations?per_page=100`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Landbot API error: ${response.status}`)
      }

      const data = await response.json()
      return data.data || []
    } catch (error) {
      console.error('Error fetching Landbot conversations:', error)
      throw error
    }
  }

  parseConversationToLead(conversation: LandbotConversation): BotLead {
    const customFields = conversation.custom_fields || {}
    const messages = conversation.messages || []
    const lastMessage = messages[messages.length - 1]?.message || ''

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
    }
  }

  async syncToSupabase(): Promise<{
    synced: number
    updated: number
    error?: string
  }> {
    try {
      const conversations = await this.fetchConversations()
      let synced = 0
      let updated = 0

      for (const conversation of conversations) {
        const lead = this.parseConversationToLead(conversation)

        const { data: existing } = await supabase
          .from('bot_data')
          .select('id')
          .eq('external_id', lead.external_id)
          .single()

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
            .eq('external_id', lead.external_id)

          if (!error) updated++
        } else {
          const { error } = await supabase
            .from('bot_data')
            .insert([lead])

          if (!error) synced++
        }
      }

      return { synced, updated }
    } catch (error) {
      return {
        synced: 0,
        updated: 0,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  async getRecentLeads(days: number = 7): Promise<any[]> {
    const since = new Date()
    since.setDate(since.getDate() - days)

    const { data, error } = await supabase
      .from('bot_data')
      .select('*')
      .gte('created_at', since.toISOString())
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  }

  async getLeadsWithEmail(): Promise<any[]> {
    const { data, error } = await supabase
      .from('bot_data')
      .select('*')
      .not('email', 'is', null)
      .neq('email', '')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  }

  async getStats(): Promise<{
    total: number
    with_email: number
    new: number
    contacted: number
    last_7_days: number
  }> {
    const { data: allData, error: allError } = await supabase
      .from('bot_data')
      .select('*')

    if (allError) throw allError

    const total = allData?.length || 0
    const with_email = allData?.filter((d: any) => d.email)?.length || 0
    const new_count = allData?.filter((d: any) => d.status === 'new')?.length || 0
    const contacted = allData?.filter((d: any) => d.status === 'contacted')?.length || 0

    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const last_7_days =
      allData?.filter((d: any) => new Date(d.created_at) > sevenDaysAgo)
        ?.length || 0

    return {
      total,
      with_email,
      new: new_count,
      contacted,
      last_7_days,
    }
  }
}
