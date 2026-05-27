# Supabase Setup for Company Operational Hub

## Database Schema

This folder contains SQL migrations to set up the complete company data model.

### Tables Created:

1. **teams** - Company departments (Marketing, Sales, Strategy, etc.)
2. **users** - Employees
3. **team_members** - Junction table linking users to teams
4. **projects** - Team projects/initiatives
5. **tasks** - Work items within projects
6. **okrs** - Objectives & Key Results (strategy team)
7. **campaigns** - Marketing campaigns
8. **sales_deals** - Sales pipeline
9. **reports** - Executive reports
10. **meetings** - Cross-team meetings

### Relationships:

```
Users ─── Team_Members ─── Teams
                              ├── Projects ─── Tasks
                              ├── OKRs
                              ├── Campaigns
                              ├── Sales_Deals
                              └── Reports
                              
Meetings (independent, optional team_id)
```

---

## Setup Instructions

### Option 1: Using Supabase Web Dashboard (Easiest)

1. Go to your Supabase project at https://app.supabase.com
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy the entire contents of `supabase/migrations/001_create_core_tables.sql`
5. Paste into the SQL editor
6. Click **Run** (or press `Cmd+Enter`)
7. Repeat steps 3-6 with `002_seed_sample_data.sql`

### Option 2: Using Supabase CLI

```bash
# Install Supabase CLI (if not already installed)
npm install -g @supabase/supabase-cli

# Link your project
supabase link --project-ref your_project_ref

# Run migrations
supabase migration up

# Or manually run SQL
supabase db push
```

### Option 3: Direct Database Connection

If you have direct database access:

```bash
# Connect to your PostgreSQL database
psql "postgresql://user:password@host:port/postgres"

# Run the migrations
\i supabase/migrations/001_create_core_tables.sql
\i supabase/migrations/002_seed_sample_data.sql
```

---

## Verify Setup

After running migrations, check that all tables exist:

```sql
-- In Supabase SQL Editor, run this query:
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
```

You should see:
- campaigns
- meetings
- okrs
- projects
- reports
- sales_deals
- tasks
- team_members
- teams
- users

---

## Sample Data

The `002_seed_sample_data.sql` file includes:

**Teams:**
- Marketing
- Sales
- Strategy
- CEO Office
- Operations

**Users:** 7 sample employees across teams

**Projects:** 6 projects at various stages

**Tasks:** 5 tasks with assignments

**OKRs:** 3 Q2 2024 objectives

**Campaigns:** 3 marketing campaigns

**Sales Deals:** 4 deals in pipeline

---

## Row-Level Security (Optional)

To enable team-based data access control, add RLS policies:

```sql
-- Enable RLS on tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales_deals ENABLE ROW LEVEL SECURITY;

-- Example: Users can only see their team's projects
CREATE POLICY "team_access" ON projects
  FOR SELECT
  USING (
    auth.uid() IN (
      SELECT user_id FROM team_members WHERE team_id = projects.team_id
    )
    OR EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND email LIKE '%ceo%')
  );
```

---

## Environment Variables

Make sure `.env.local` has your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

---

## Next Steps

Once tables are created:

1. Verify data exists: `SELECT COUNT(*) FROM users;`
2. Test queries in SQL Editor
3. Build agent tools to query these tables
4. Create React components for team views

---

## Troubleshooting

**"Table already exists" error:**
- This is normal if running migrations twice
- The migrations use `IF NOT EXISTS` and `ON CONFLICT` to handle this

**Foreign key constraint errors:**
- Ensure migrations run in order (001 before 002)
- Check that teams exist before inserting team_members

**Missing sample data:**
- Sample data is optional; you can delete 002_seed_sample_data.sql and create data manually via UI
