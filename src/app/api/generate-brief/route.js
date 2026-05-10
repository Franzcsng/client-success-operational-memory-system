import { aggregateClientContext } from "@/services/contextAggregator"
import { getClientMemory } from "@/services/memoryService"
import { runBriefWorkflow } from "@/orchestrator/langgraph/runBriefWorkflow"

export async function POST(req) {
  try {
    const body = await req.json()

    const { clientId } = body

    // 1. Aggregate context
    const context = await aggregateClientContext(clientId)

    // 2. Fetch memory
    const existingMemory = await getClientMemory(clientId)

    // 3. Run orchestration workflow
    const result = await runBriefWorkflow(
      context,
      existingMemory
    )

    // 4. Return generated brief
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