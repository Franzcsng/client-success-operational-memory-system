// import { getMockSlack } from "../mock-data/mockSlack"
// import { getMockEmails } from "../mock-data/mockEmails"
// import { getMockFathom } from "../mock-data/mockFathom"

export async function aggregateClientContext(clientId) {
//   const slack = await getMockSlack(clientId)
//   const emails = await getMockEmails(clientId)
//   const transcripts = await getMockFathom(clientId)

  return {
    slack,
    emails,
    transcripts,
  }
}