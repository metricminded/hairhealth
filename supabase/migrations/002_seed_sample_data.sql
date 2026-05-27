-- Seed TEAMS
INSERT INTO teams (name, description) VALUES
('Marketing', 'Campaigns, content, and brand management'),
('Sales', 'Business development and revenue generation'),
('Strategy', 'Planning, roadmaps, and OKRs'),
('CEO Office', 'Executive leadership and decisions'),
('Operations', 'HR, finance, and internal operations')
ON CONFLICT (name) DO NOTHING;

-- Seed USERS
INSERT INTO users (name, email, title, department, status) VALUES
('Sarah Johnson', 'sarah.johnson@company.com', 'CEO', 'CEO Office', 'active'),
('Marcus Chen', 'marcus.chen@company.com', 'VP Marketing', 'Marketing', 'active'),
('Emily Rodriguez', 'emily.rodriguez@company.com', 'Marketing Manager', 'Marketing', 'active'),
('David Kim', 'david.kim@company.com', 'VP Sales', 'Sales', 'active'),
('Jessica White', 'jessica.white@company.com', 'Sales Manager', 'Sales', 'active'),
('Alex Thompson', 'alex.thompson@company.com', 'Strategy Lead', 'Strategy', 'active'),
('Priya Patel', 'priya.patel@company.com', 'Head of Operations', 'Operations', 'active')
ON CONFLICT (email) DO NOTHING;

-- Seed TEAM_MEMBERS
INSERT INTO team_members (user_id, team_id, role, start_date, status) VALUES
((SELECT id FROM users WHERE email = 'sarah.johnson@company.com'), (SELECT id FROM teams WHERE name = 'CEO Office'), 'CEO', '2020-01-01', 'active'),
((SELECT id FROM users WHERE email = 'marcus.chen@company.com'), (SELECT id FROM teams WHERE name = 'Marketing'), 'VP', '2020-06-01', 'active'),
((SELECT id FROM users WHERE email = 'emily.rodriguez@company.com'), (SELECT id FROM teams WHERE name = 'Marketing'), 'Manager', '2021-03-15', 'active'),
((SELECT id FROM users WHERE email = 'david.kim@company.com'), (SELECT id FROM teams WHERE name = 'Sales'), 'VP', '2020-09-01', 'active'),
((SELECT id FROM users WHERE email = 'jessica.white@company.com'), (SELECT id FROM teams WHERE name = 'Sales'), 'Manager', '2022-01-10', 'active'),
((SELECT id FROM users WHERE email = 'alex.thompson@company.com'), (SELECT id FROM teams WHERE name = 'Strategy'), 'Lead', '2021-06-01', 'active'),
((SELECT id FROM users WHERE email = 'priya.patel@company.com'), (SELECT id FROM teams WHERE name = 'Operations'), 'Head', '2019-11-01', 'active')
ON CONFLICT DO NOTHING;

-- Seed PROJECTS
INSERT INTO projects (team_id, name, description, status, priority, start_date, end_date, owner_id) VALUES
((SELECT id FROM teams WHERE name = 'Marketing'), 'Q2 Social Media Campaign', 'Expand presence on TikTok and Instagram', 'in_progress', 'high', '2024-04-01', '2024-06-30', (SELECT id FROM users WHERE email = 'marcus.chen@company.com')),
((SELECT id FROM teams WHERE name = 'Marketing'), 'Website Redesign', 'Modernize company website with new branding', 'planning', 'medium', '2024-05-01', '2024-08-31', (SELECT id FROM users WHERE email = 'emily.rodriguez@company.com')),
((SELECT id FROM teams WHERE name = 'Sales'), 'Enterprise Account Expansion', 'Grow revenue from existing enterprise clients', 'in_progress', 'high', '2024-01-01', '2024-12-31', (SELECT id FROM users WHERE email = 'david.kim@company.com')),
((SELECT id FROM teams WHERE name = 'Sales'), 'New Market Research', 'Evaluate entry into European market', 'planning', 'medium', '2024-06-01', '2024-09-30', (SELECT id FROM users WHERE email = 'jessica.white@company.com')),
((SELECT id FROM teams WHERE name = 'Strategy'), 'Five-Year Roadmap', 'Define strategic direction for next 5 years', 'in_progress', 'high', '2024-01-01', '2024-06-30', (SELECT id FROM users WHERE email = 'alex.thompson@company.com')),
((SELECT id FROM teams WHERE name = 'Operations'), 'Company Offsite Planning', 'Plan annual company retreat', 'planning', 'medium', '2024-05-01', '2024-07-31', (SELECT id FROM users WHERE email = 'priya.patel@company.com'))
ON CONFLICT DO NOTHING;

-- Seed TASKS
INSERT INTO tasks (project_id, assigned_to, title, description, status, priority, due_date) VALUES
((SELECT id FROM projects WHERE name = 'Q2 Social Media Campaign'), (SELECT id FROM users WHERE email = 'emily.rodriguez@company.com'), 'Create content calendar', 'Plan all social media posts for Q2', 'in_progress', 'high', '2024-04-15'),
((SELECT id FROM projects WHERE name = 'Q2 Social Media Campaign'), (SELECT id FROM users WHERE email = 'emily.rodriguez@company.com'), 'Design graphics', 'Create 20+ branded graphics for posts', 'todo', 'high', '2024-04-20'),
((SELECT id FROM projects WHERE name = 'Website Redesign'), (SELECT id FROM users WHERE email = 'emily.rodriguez@company.com'), 'Competitor analysis', 'Research 5 competitor websites', 'completed', 'medium', '2024-05-10'),
((SELECT id FROM projects WHERE name = 'Enterprise Account Expansion'), (SELECT id FROM users WHERE email = 'jessica.white@company.com'), 'Schedule meetings with 5 key accounts', 'Contact and book meetings', 'in_progress', 'high', '2024-04-30'),
((SELECT id FROM projects WHERE name = 'Enterprise Account Expansion'), (SELECT id FROM users WHERE email = 'jessica.white@company.com'), 'Prepare pitch decks', 'Create customized presentations', 'todo', 'high', '2024-05-15')
ON CONFLICT DO NOTHING;

-- Seed OKRS
INSERT INTO okrs (team_id, quarter, objective, key_results, progress, owner_id) VALUES
((SELECT id FROM teams WHERE name = 'Marketing'), 'Q2 2024', 'Double social media engagement', '["Reach 100K followers on TikTok", "Achieve 10% engagement rate", "Generate $500K in attributed revenue"]', 45, (SELECT id FROM users WHERE email = 'marcus.chen@company.com')),
((SELECT id FROM teams WHERE name = 'Sales'), 'Q2 2024', 'Grow revenue to $5M', '["Close 10 enterprise deals", "Expand 3 existing accounts by 50%", "Achieve 95% customer retention"]', 60, (SELECT id FROM users WHERE email = 'david.kim@company.com')),
((SELECT id FROM teams WHERE name = 'Strategy'), 'Q2 2024', 'Define strategic priorities', '["Complete market analysis", "Interview 20+ customers", "Present board-approved roadmap"]', 70, (SELECT id FROM users WHERE email = 'alex.thompson@company.com'))
ON CONFLICT DO NOTHING;

-- Seed CAMPAIGNS
INSERT INTO campaigns (team_id, name, description, status, budget, start_date, end_date) VALUES
((SELECT id FROM teams WHERE name = 'Marketing'), 'Summer Product Launch', 'Launch new product line for summer season', 'in_progress', 250000.00, '2024-04-01', '2024-08-31'),
((SELECT id FROM teams WHERE name = 'Marketing'), 'Email Nurture Series', 'Build email sequences for lead nurturing', 'planning', 50000.00, '2024-06-01', '2024-12-31'),
((SELECT id FROM teams WHERE name = 'Marketing'), 'Brand Awareness Campaign', 'Increase brand recognition among target demographics', 'draft', 150000.00, '2024-07-01', '2024-09-30')
ON CONFLICT DO NOTHING;

-- Seed SALES_DEALS
INSERT INTO sales_deals (team_id, company_name, deal_value, stage, owner_id, expected_close_date) VALUES
((SELECT id FROM teams WHERE name = 'Sales'), 'TechCorp Inc', 500000.00, 'negotiation', (SELECT id FROM users WHERE email = 'david.kim@company.com'), '2024-05-31'),
((SELECT id FROM teams WHERE name = 'Sales'), 'Global Solutions Ltd', 350000.00, 'proposal', (SELECT id FROM users WHERE email = 'jessica.white@company.com'), '2024-06-15'),
((SELECT id FROM teams WHERE name = 'Sales'), 'Innovation Labs', 200000.00, 'discovery', (SELECT id FROM users WHERE email = 'jessica.white@company.com'), '2024-07-30'),
((SELECT id FROM teams WHERE name = 'Sales'), 'Enterprise Systems Co', 1500000.00, 'qualified', (SELECT id FROM users WHERE email = 'david.kim@company.com'), '2024-08-31')
ON CONFLICT DO NOTHING;
