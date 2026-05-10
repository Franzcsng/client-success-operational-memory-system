export const mockAirtableClient = (clientId) => {
  return {
    id: clientId,
    name: "Acme Corp",
    industry: "SaaS",
    account_status: "active",
    onboarding_status: "delayed",
    assigned_am: "john_doe",
    assigned_csm: "jane_smith",
    priority_level: "high",

    notes: [
      "Client is highly sensitive to delays",
      "Prefers weekly structured updates",
    ],
  }
}