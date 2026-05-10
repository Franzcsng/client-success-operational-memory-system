export const mockSlack = (clientId) => {
  return [
    {
      id: "slack_1",
      channel: "#client-updates",
      user: "account_manager",
      message:
        "Hey team, client is still waiting on onboarding dashboard access. This has been pending since last week.",
      timestamp: "2026-05-08T10:00:00Z",
    },
    {
      id: "slack_2",
      channel: "#client-support",
      user: "cs_team",
      message:
        "Client mentioned frustration again about slow response times from dev team.",
      timestamp: "2026-05-08T10:05:00Z",
    },
    {
      id: "slack_3",
      channel: "#internal-notes",
      user: "account_manager",
      message:
        "Client seems positive overall but getting impatient with deliverables timeline.",
      timestamp: "2026-05-09T09:30:00Z",
    },
  ]
}