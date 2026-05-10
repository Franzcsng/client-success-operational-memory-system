import { mockSlack } from "../mock-data/mockSlack"
import { mockEmails } from "../mock-data/mockEmail"
import { mockFathom } from "../mock-data/mockFathom"
import { mockAirtableClient } from "../mock-data/mockAirtable"

export function aggregateClientContext(clientId) {
  const slack =  mockSlack(clientId)
  const emails =  mockEmails(clientId)
  const transcripts =  mockFathom(clientId)
 const clientInformation =  mockAirtableClient(clientId)

  return {
    slack,
    emails,
    transcripts,
    clientInformation
  }
}