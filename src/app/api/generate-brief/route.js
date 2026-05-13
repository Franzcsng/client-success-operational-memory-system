
import { runBriefWorkflow } from "@/orchestrator/langgraph/runWorkflow"

import { deduplicateMemoryUpdates } from "@/services/memoryChecker"

import { getClientMemory, insertClientMemory, upsertClientMemory } from "@/services/db/memoryService"
import { saveMeetingBrief } from "@/services/db/briefService"

export async function POST(req) {
  try {
    const body = await req.json()

    const { clientId, meetingId, context } = body

    const existingMemory = await getClientMemory(clientId)

    const result = await runBriefWorkflow(
      context,
      existingMemory
    )

    console.log(result)
    const cleanedMemory = deduplicateMemoryUpdates(
        existingMemory,
        result.memoryUpdates
    )
  
  const existing = cleanedMemory.filter(m => m.id)
  const newMemory = cleanedMemory.filter(m => !m.id)

  const sanitizedExisting = existing.map(m => ({
    id: m.id,
    memory_type: m.memory_type,
    content: m.content,
    importance_score: m.importance_score,
    frequency: m.frequency,
    status: m.status,
    last_seen_at: new Date().toISOString(),
  }))

  const enrichedNewMemory = newMemory.map(m => ({
      client_id: clientId,
      source_meeting_id: meetingId,
      memory_type: m.memory_type,
      content: m.content,
      importance_score: m.importance_score,
      frequency: m.frequency ?? 1,
      status: m.status ?? "active",
      last_seen_at: new Date().toISOString(),
  }))


  await upsertClientMemory(sanitizedExisting)
  await insertClientMemory(enrichedNewMemory)

  await saveMeetingBrief({
      meeting_id: meetingId,
      executive_summary: result.brief.summary,
      risks: result.brief.risks,
      talking_points: result.brief.talkingPoints,
      action_items: result.brief.actionItems,
  })
    
    return Response.json({
      success: true,
      brief: result.brief,
      memoryUpdates: cleanedMemory,
    })

  } catch (err) {
    console.error(err)

    return Response.json(
      { success: false },
      { status: 500 }
    )
  }
}