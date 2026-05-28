# How Your Data is Saved in Supabase

## 📊 Database Table: `bot_data`

```
┌──────────────┬───────────┬─────────────────────────────────────────┐
│ Column       │ Type      │ Description                             │
├──────────────┼───────────┼─────────────────────────────────────────┤
│ id           │ BIGINT    │ Auto-increment primary key (unique)    │
│ external_id  │ TEXT      │ Unique Landbot ID (indexed, searchable) │
│ name         │ TEXT      │ Customer name                           │
│ email        │ TEXT      │ Email address (indexed)                 │
│ phone        │ TEXT      │ Phone number                            │
│ message      │ TEXT      │ Last message/note                       │
│ conversation_id │ TEXT   │ Landbot conversation ID                │
│ status       │ TEXT      │ Lead status (new, contacted, etc)       │
│ source       │ TEXT      │ Always "landbot"                        │
│ metadata     │ JSONB     │ Complex data (JSON format)              │
│ created_at   │ TIMESTAMP │ When record was created (indexed)      │
│ updated_at   │ TIMESTAMP │ Last time record was updated            │
└──────────────┴───────────┴─────────────────────────────────────────┘
```

## 💾 Example Record (Row)

```json
{
  "id": 1,
  "external_id": "521248648",
  "name": "Rishabh Agrahari",
  "email": "agraharirishabh58@gmail.com",
  "phone": "919140919904",
  "message": "",
  "conversation_id": "521248648",
  "status": "new",
  "source": "landbot",
  "metadata": {
    "channel": "landbot",
    "country": "India",
    "gender": "Male",
    "date_registered": "2026-05-25 20:00:20",
    "custom_fields": {
      "@age": "26",
      "@channel": "La densitae",
      "@cost": "Consult for Price (₹30 per graft)",
      "@country": "India",
      "@email": "agraharirishabh58@gmail.com",
      "@gender": "Male",
      "@grade": "1",
      "@graft": "1000 - 1500",
      "@name": "Rishabh Agrahari",
      "@phone": "919140919904",
      "@question_1": "Less than 6 months",
      "@question_2": "Yes",
      "@question_3": "Average",
      "@question_4": "Minoxidil",
      "@question_5": "As soon as possible",
      "@country": "Baner - Pune",
      "@url": "https://www.hairhealth.ai/india/ladensitae/assessment"
    }
  },
  "created_at": "2026-05-25T20:00:20.000Z",
  "updated_at": "2026-05-28T00:00:00.000Z"
}
```

## 📈 What Got Imported

- **Total Records**: 4,566 customer leads
- **Fields Imported**: All customer data from CSV
- **Status**: All set to "new" (ready for follow-up)
- **Source**: All marked as "landbot"
- **Indexing**: Fast queries on email, status, created_at

## 🔍 Why This Structure?

### Searchable Columns (Fast Queries)
- `external_id` - Find by Landbot ID
- `email` - Filter leads with emails
- `status` - Find by lead status
- `created_at` - Find recent leads
- `phone` - Contact lookups

### Metadata (Complex Data)
```javascript
metadata: {
  channel,        // Source channel
  country,        // Customer location
  gender,         // Demographics
  date_registered, // When they signed up
  custom_fields   // All Landbot custom fields
}
```

This allows flexible querying of custom fields without changing table schema!

## 🤖 How Agent Queries This

When you ask:
```
"How many leads do we have from India?"
```

The Agent queries:
```sql
SELECT COUNT(*) FROM bot_data 
WHERE metadata->>'country' = 'India'
```

Or for emails:
```sql
SELECT * FROM bot_data 
WHERE email != '' AND email IS NOT NULL
ORDER BY created_at DESC
```

## ✅ Data is Ready!

Your 4,566 leads are now:
- ✨ Saved in Supabase PostgreSQL
- 🔍 Indexed for fast queries
- 🤖 Accessible to the AI Agent
- 💬 Ready for natural language questions
