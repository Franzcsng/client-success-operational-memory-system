
// import { getClientMemory } from "@/services/memoryService"
import { runBriefWorkflow } from "@/orchestrator/langgraph/runWorkflow"


import { deduplicateMemoryUpdates } from "@/services/memoryChecker"

import { getClientMemory } from "@/services/db/memoryService"
import { upsertClientMemory } from "@/services/db/memoryService"
import { saveMeetingBrief } from "@/services/db/briefService"

export async function POST(req) {
  try {
    const body = await req.json()

    const { clientId, meetingId, context } = body

    // 2. Fetch memory
    const existingMemory = await getClientMemory(clientId)

    console.log('EXISTING MEMORY', existingMemory)

    // 3. Run orchestration workflow
    const result = await runBriefWorkflow(
      context,
      existingMemory
    )

      // 4. MEMORY DEDUP LAYER 
    const cleanedMemory = deduplicateMemoryUpdates(
        existingMemory,
        result.memoryUpdates
    )

    

    console.log('cleaned memory:', cleanedMemory)

    const enrichedMemory = result.memoryUpdates.map(memory => ({
        ...memory,
        client_id: clientId,
        source_meeting_id: meetingId,
        last_seen_at: new Date().toISOString(),
    }))

    console.log(enrichedMemory)

    await upsertClientMemory(enrichedMemory)

    // 5. SAVE BRIEF
    await saveMeetingBrief({
        meeting_id: meetingId,
        executive_summary: result.brief.summary,
        risks: result.brief.risks,
        talking_points: result.brief.talkingPoints,
        action_items: result.brief.actionItems,
    })
    
    // 6. Return generated brief
    return Response.json({
      success: true,
      brief: result.brief,
      memoryUpdates: result.memoryUpdates,
    })

  } catch (err) {
    console.error(err)

    return Response.json(
      { success: false },
      { status: 500 }
    )
  }
}