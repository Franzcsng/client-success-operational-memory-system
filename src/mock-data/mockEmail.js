export const mockEmails = (clientId) => {
  return [
    {
      id: "email_1",
      from: "client@company.com",
      subject: "Onboarding delay concern",
      body:
        "Hi team, we are still waiting for the onboarding setup. This delay is affecting our internal launch timeline.",
      timestamp: "2026-05-07T14:00:00Z",
    },
    {
      id: "email_2",
      from: "account.manager@atlas.com",
      subject: "Re: Onboarding update",
      body:
        "We are actively working on it. Expected completion by next week.",
      timestamp: "2026-05-07T15:00:00Z",
    },
    {
      id: "email_3",
      from: "client@company.com",
      subject: "Weekly sync feedback",
      body:
        "Overall things are good, but response time could be improved.",
      timestamp: "2026-05-09T08:00:00Z",
    },
  ]
}