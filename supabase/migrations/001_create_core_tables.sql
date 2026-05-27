-- Create TEAMS table
CREATE TABLE IF NOT EXISTS teams (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create USERS table
CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  title TEXT,
  department TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create TEAM_MEMBERS junction table
CREATE TABLE IF NOT EXISTS team_members (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  team_id BIGINT NOT NULL,
  role TEXT NOT NULL,
  start_date DATE,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
  UNIQUE(user_id, team_id)
);

-- Create PROJECTS table
CREATE TABLE IF NOT EXISTS projects (
  id BIGSERIAL PRIMARY KEY,
  team_id BIGINT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'planning',
  priority TEXT DEFAULT 'medium',
  start_date DATE,
  end_date DATE,
  owner_id BIGINT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
  FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Create TASKS table
CREATE TABLE IF NOT EXISTS tasks (
  id BIGSERIAL PRIMARY KEY,
  project_id BIGINT NOT NULL,
  assigned_to BIGINT,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'todo',
  priority TEXT DEFAULT 'medium',
  due_date DATE,
  completed_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
  FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL
);

-- Create OKRS table (Strategy team)
CREATE TABLE IF NOT EXISTS okrs (
  id BIGSERIAL PRIMARY KEY,
  team_id BIGINT NOT NULL,
  quarter TEXT NOT NULL,
  objective TEXT NOT NULL,
  key_results JSONB DEFAULT '[]'::jsonb,
  progress INTEGER DEFAULT 0,
  owner_id BIGINT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
  FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Create CAMPAIGNS table (Marketing team)
CREATE TABLE IF NOT EXISTS campaigns (
  id BIGSERIAL PRIMARY KEY,
  team_id BIGINT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'draft',
  budget DECIMAL(10, 2),
  start_date DATE,
  end_date DATE,
  metrics JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
);

-- Create SALES_DEALS table (Sales team)
CREATE TABLE IF NOT EXISTS sales_deals (
  id BIGSERIAL PRIMARY KEY,
  team_id BIGINT NOT NULL,
  company_name TEXT NOT NULL,
  deal_value DECIMAL(12, 2),
  stage TEXT DEFAULT 'prospect',
  owner_id BIGINT,
  created_date DATE DEFAULT CURRENT_DATE,
  expected_close_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
  FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Create REPORTS table
CREATE TABLE IF NOT EXISTS reports (
  id BIGSERIAL PRIMARY KEY,
  team_id BIGINT NOT NULL,
  title TEXT NOT NULL,
  type TEXT,
  data JSONB DEFAULT '{}'::jsonb,
  created_by BIGINT,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Create MEETINGS table
CREATE TABLE IF NOT EXISTS meetings (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  date TIMESTAMP NOT NULL,
  attendees JSONB DEFAULT '[]'::jsonb,
  team_id BIGINT,
  notes TEXT,
  decisions TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL
);

-- Create indexes for better query performance
CREATE INDEX idx_team_members_user_id ON team_members(user_id);
CREATE INDEX idx_team_members_team_id ON team_members(team_id);
CREATE INDEX idx_projects_team_id ON projects(team_id);
CREATE INDEX idx_projects_owner_id ON projects(owner_id);
CREATE INDEX idx_tasks_project_id ON tasks(project_id);
CREATE INDEX idx_tasks_assigned_to ON tasks(assigned_to);
CREATE INDEX idx_okrs_team_id ON okrs(team_id);
CREATE INDEX idx_campaigns_team_id ON campaigns(team_id);
CREATE INDEX idx_sales_deals_team_id ON sales_deals(team_id);
CREATE INDEX idx_reports_team_id ON reports(team_id);
CREATE INDEX idx_meetings_date ON meetings(date);
