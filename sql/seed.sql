-- =========================
-- 1. CLIENT
-- =========================

insert into public.clients (id, name, industry, health_status, account_manager_id)
values (
  '11111111-1111-1111-1111-111111111111',
  'Acme Corp',
  'SaaS',
  'at_risk',
  null
);

-- =========================
-- 2. MEETINGS 
-- =========================

insert into public.meetings (
  id, client_id, title, meeting_date, transcript_json
)
values (
  '22222222-2222-2222-2222-222222222222',
  '11111111-1111-1111-1111-111111111111',
  'Weekly Sync - Onboarding Issues',
  '2026-05-01T10:00:00Z',
  '{
    "summary": "Client expressed frustration about onboarding delays and setup issues.",
    "sentiment": "negative"
  }'::jsonb
);

insert into public.meetings (
  id, client_id, title, meeting_date, transcript_json
)
values (
  '33333333-3333-3333-3333-333333333333',
  '11111111-1111-1111-1111-111111111111',
  'Follow-up Sync - Response Time Concerns',
  '2026-05-05T10:00:00Z',
  '{
    "summary": "Client mentioned slow response times and requested faster updates.",
    "sentiment": "mixed"
  }'::jsonb
);

insert into public.meetings (
  id, client_id, title, meeting_date, transcript_json
)
values (
  '44444444-4444-4444-4444-444444444444',
  '11111111-1111-1111-1111-111111111111',
  'Weekly Sync - Upcoming',
  '2026-05-12T10:00:00Z',
  null
);

