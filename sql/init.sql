-- USERS
create table users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  role text not null,
  created_at timestamp default now()
);

-- CLIENTS
create table clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  industry text,
  health_status text,
  account_manager_id uuid references users(id),
  created_at timestamp default now()
);

-- MEETINGS
create table meetings (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id),
  title text not null,
  meeting_date timestamp,
  transcript_json jsonb,
  created_at timestamp default now()
);

-- MEETING BRIEFS
create table meeting_briefs (
  id uuid primary key default gen_random_uuid(),
  meeting_id uuid references meetings(id),
  executive_summary text,
  risks jsonb,
  talking_points jsonb,
  action_items jsonb,
  generated_at timestamp default now()
);

-- CLIENT MEMORY
create table client_memory (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id),
  memory_type text,
  content text,
  frequency integer default 1,
  importance_score integer default 1,
  status text,
  last_seen_at timestamp,
  source_meeting_id uuid references meetings(id),
  created_at timestamp default now()
);