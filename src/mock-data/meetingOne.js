export const meetingOne = {
  slack: [
    {
      sender: "Sarah (AM)",
      message:
        "Client is still waiting for onboarding credentials from ops.",
    },
    {
      sender: "Operations",
      message:
        "Provisioning should be completed tomorrow morning.",
    },
  ],

  emails: [
    {
      subject: "Onboarding Setup Delay",
      body:
        "Hi team, we're concerned about the onboarding delay since our internal rollout depends on this setup.",
    },
    {
      subject: "Re: Onboarding Setup Delay",
      body:
        "We understand the concern and are actively coordinating with operations.",
    },
  ],

  fathom: {
    summary:
      "Client expressed concern regarding onboarding delays but remained collaborative during the call.",
    sentiment: "neutral",
    actionItems: [
      "Provide onboarding ETA",
      "Coordinate provisioning with operations",
    ],
  },

  airtable: {
    renewalDate: "2026-12-01",
    healthScore: 72,
    contractValue: "$48,000",
    onboardingStatus: "Delayed",
  },
}