export const meetingTwo = {
  slack: [
    {
      sender: "Sarah (AM)",
      message:
        "Client followed up again regarding onboarding access.",
    },
    {
      sender: "Support Lead",
      message:
        "Response times have been slower than expected this week.",
    },
    {
      sender: "Client Success Manager",
      message:
        "Need to stabilize communication before renewal discussions.",
    },
  ],

  emails: [
    {
      subject: "Urgent Follow-up on Delays",
      body:
        "The onboarding issue is now affecting our launch timeline. We also need faster communication from the team.",
    },
    {
      subject: "Re: Urgent Follow-up on Delays",
      body:
        "We apologize for the delays and are prioritizing this internally.",
    },
  ],

  fathom: {
    summary:
      "Client expressed visible frustration regarding onboarding delays and slow response times.",
    sentiment: "negative",
    actionItems: [
      "Assign dedicated onboarding contact",
      "Improve communication cadence",
      "Escalate onboarding internally",
    ],
  },

  airtable: {
    renewalDate: "2026-12-01",
    healthScore: 58,
    contractValue: "$48,000",
    onboardingStatus: "At Risk",
  },
}