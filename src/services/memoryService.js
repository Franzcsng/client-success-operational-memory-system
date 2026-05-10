export async function getClientMemory(clientId) {
  // later: Supabase query

  return [
     {
      memory_type: "risk",
      content:
        "Client has repeatedly expressed concerns about onboarding delays.",
      frequency: 3,
      importance_score: 9,
      status: "active",
      last_seen_at: "2026-05-01T00:00:00Z",
    },
    {
      memory_type: "preference",
      content:
        "Client prefers fast response times and frequent updates during execution phase.",
      frequency: 2,
      importance_score: 7,
      status: "active",
      last_seen_at: "2026-05-03T00:00:00Z",
    },
    {
      memory_type: "relationship",
      content:
        "Client is engaged but becoming increasingly impatient with delivery speed.",
      frequency: 2,
      importance_score: 6,
      status: "active",
      last_seen_at: "2026-05-05T00:00:00Z",
    },
  ]
}