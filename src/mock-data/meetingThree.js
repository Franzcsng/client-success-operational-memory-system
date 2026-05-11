export const meetingThree = {
  meeting: {
    id: "meeting_3",
    title: "Upcoming Weekly Sync",
    date: "2026-05-12T10:00:00Z",
  },

  slack: [
    {
      sender: "Client Success Manager",
      message:
        "Client mentioned leadership is asking for escalation options.",
    },
    {
      sender: "Sarah (AM)",
      message:
        "Need strong meeting prep. Client confidence appears low.",
    },
    {
      sender: "Operations",
      message:
        "Remaining onboarding blockers still unresolved.",
    },
  ],

  emails: [
    {
      subject: "Concerns Regarding Ongoing Delays",
      body:
        "We are increasingly concerned about the lack of progress and communication consistency. This is impacting stakeholder confidence internally.",
    },
    {
      subject: "Re: Concerns Regarding Ongoing Delays",
      body:
        "We understand the seriousness of the issue and will provide a recovery plan during the next sync.",
    },
  ],

  fathom: {
    summary:
      "Client sentiment has shifted toward dissatisfaction. Leadership concerns and operational trust issues were discussed.",
    sentiment: "highly_negative",
    actionItems: [
      "Present recovery plan",
      "Rebuild stakeholder confidence",
      "Provide firm onboarding completion timeline",
    ],
  },

  airtable: {
    renewalDate: "2026-12-01",
    healthScore: 41,
    contractValue: "$48,000",
    onboardingStatus: "Escalated",
  },
}