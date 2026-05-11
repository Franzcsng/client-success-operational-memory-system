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
-- 2. MEETINGS (PAST + FUTURE)
-- =========================

-- Past Meeting 1
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

-- Past Meeting 2
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

-- Upcoming Meeting (THIS IS FOR YOUR BRIEF GENERATION TEST)
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

-- =========================
-- 3. MEETING BRIEFS (PAST ONLY)
-- =========================

-- Brief for Meeting 1
insert into public.meeting_briefs (
  id, meeting_id, executive_summary, risks, talking_points, action_items
)
values (
  '55555555-5555-5555-5555-555555555555',
  '22222222-2222-2222-2222-222222222222',
  'Client is experiencing onboarding delays affecting internal rollout.',
  '[
    "Onboarding delay impacting launch timeline",
    "Risk of client dissatisfaction increasing"
  ]'::jsonb,
  '[
    "Review onboarding progress",
    "Discuss internal bottlenecks"
  ]'::jsonb,
  '[
    "Escalate onboarding issue to engineering",
    "Provide ETA update to client"
  ]'::jsonb
);

-- Brief for Meeting 2
insert into public.meeting_briefs (
  id, meeting_id, executive_summary, risks, talking_points, action_items
)
values (
  '66666666-6666-6666-6666-666666666666',
  '33333333-3333-3333-3333-333333333333',
  'Client continues to report slow response times and communication gaps.',
  '[
    "Perceived lack of responsiveness from team",
    "Risk of churn if communication does not improve"
  ]'::jsonb,
  '[
    "Response time improvements",
    "Support process review"
  ]'::jsonb,
  '[
    "Assign dedicated support contact",
    "Improve SLA tracking"
  ]'::jsonb
);