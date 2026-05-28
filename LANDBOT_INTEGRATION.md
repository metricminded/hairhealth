# Landbot Integration Guide

This document explains how the Landbot integration works and how to use it.

---

## 🔗 What's Connected

Your **Landbot conversations and leads** are now synced to **Supabase** and queryable through the **AI Agent**.

### Data Flow:
```
Landbot (conversations/leads)
    ↓ (API fetch)
Supabase (bot_data table)
    ↓ (Agent tools)
Agent (responds to questions)
    ↓
You (get answers)
```

---

## 📊 What Gets Saved

From each Landbot conversation, we extract:
- **Name** - Visitor name
- **Email** - Contact email
- **Phone** - Phone number
- **Message** - Last message content
- **Conversation ID** - Unique Landbot conversation ID
- **Status** - Lead status (new, contacted, etc.)
- **Metadata** - Full conversation data, custom fields, timestamp

---

## 🤖 Agent Commands

Once data is synced, ask the agent:

```
"Sync my Landbot leads to Supabase"
→ Fetches all conversations and saves them

"How many leads do we have from the bot?"
→ Shows total count and breakdown

"Show me recent bot leads"
→ Lists leads from last 7 days

"Get leads with emails"
→ Only shows leads that have email addresses

"What's our bot performance?"
→ Shows statistics (new leads, contacted, etc.)
```

---

## ⚙️ Setup Steps

### 1. Create `bot_data` Table

Run this in Supabase SQL Editor:
```sql
-- From: supabase/migrations/003_create_bot_data_table.sql
(Copy entire file and run in Supabase)
```

### 2. Add API Key to `.env.local`

```env
VITE_LANDBOT_API_KEY=your_key_here
```

Already done in this project ✓

### 3. Run App

```bash
npm run dev
```

### 4. Sync Data

Ask the agent:
```
"Sync my Landbot leads"
```

---

## 📁 Files Modified

- `supabase/migrations/003_create_bot_data_table.sql` - Database schema
- `src/lib/integrations/landbotService.ts` - Landbot API integration
- `src/lib/agent/botTools.ts` - Agent tools for bot data
- `src/lib/agent/agentController.ts` - Updated with bot tools
- `src/components/AgentAssistant.tsx` - Pass Landbot key to agent
- `.env.local` - Added LANDBOT_API_KEY

---

## 🔄 Automatic Sync (Optional)

To sync automatically at intervals, you can create a function:

```typescript
// In your component or service
setInterval(async () => {
  const landbotService = new LandbotService(apiKey);
  await landbotService.syncToSupabase();
}, 3600000); // Every hour
```

Or use a webhook from Landbot to push data.

---

## 📈 Bot Data Table Schema

```sql
bot_data (
  id BIGINT PRIMARY KEY,
  external_id TEXT UNIQUE,      -- Landbot conversation ID
  name TEXT,                     -- Visitor name
  email TEXT,                    -- Contact email
  phone TEXT,                    -- Phone number
  message TEXT,                  -- Last message
  conversation_id TEXT,          -- Landbot conversation ID
  status TEXT,                   -- Lead status
  source TEXT,                   -- Always "landbot"
  metadata JSONB,                -- Full conversation data
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)
```

---

## 🚀 Next Steps

1. ✅ Table created in Supabase
2. ✅ API key configured
3. ✅ Agent tools set up
4. ⏭️ **Ask agent to sync data**
5. ⏭️ **Query bot leads through agent**

---

## 🔧 Troubleshooting

**"API key not configured"**
- Check `.env.local` has `VITE_LANDBOT_API_KEY`
- Restart dev server after updating `.env.local`

**"No leads returned"**
- Make sure you've synced data first
- Check Landbot has active conversations
- Verify API key is correct

**"Sync shows 0 leads"**
- Your Landbot might not have conversations yet
- Check Landbot dashboard for conversations
- Verify API key has permission to fetch conversations

---

## 📝 Example Agent Interactions

```
User: "How many bot leads do we have?"
Agent: "Let me check your Landbot data..."
Agent: "You have 42 total leads from Landbot, with 28 that have email addresses"

User: "Show me leads from this week"
Agent: "Fetching recent leads..."
Agent: "Found 12 leads from this week:
1. John Smith (john@company.com) - "How much does it cost?"
2. Sarah Jones (sarah@email.com) - "Tell me more"
..."

User: "Sync my latest Landbot conversations"
Agent: "Syncing from Landbot API..."
Agent: "Synced 15 new leads and updated 3 existing ones"
```

---

## 🎯 What You Can Build Next

With bot data integrated:
- Lead scoring system
- Automated follow-up workflows
- Bot performance dashboards
- Lead routing to sales team
- Sentiment analysis on conversations
- Integration with CRM

---

Need help? Check the Landbot API docs: https://docs.landbot.io/
