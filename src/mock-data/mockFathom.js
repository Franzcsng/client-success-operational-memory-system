export const mockFathom = (clientId) => {
  return [
    {
      id: "meeting_1",
      title: "Weekly Client Sync",
      transcript: `
        Client: We're still waiting on onboarding dashboard access.
        AM: We're prioritizing it this week.
        Client: This delay is impacting our internal rollout timeline.

        Client: Overall things are going well, but communication speed could improve.
      `,
      summary:
        "Client concerned about onboarding delay and communication speed.",
      timestamp: "2026-05-06T10:00:00Z",
    },
    {
      id: "meeting_2",
      title: "Project Kickoff Review",
      transcript: `
        Client: Excited about the project but needs faster execution.
        AM: We will improve turnaround time.

        Client: Please ensure updates are more frequent.
      `,
      summary:
        "Client expressed urgency and requested better update frequency.",
      timestamp: "2026-05-01T10:00:00Z",
    },
  ]
}