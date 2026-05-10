import { createBriefGraph } from "./workflows/meetingBriefGraph"

export async function runBriefWorkflow(context, existingMemory) {
  const graph = createBriefGraph()

  const result = await graph.invoke({
    context,
    existingMemory,
    signals: null,
    prioritizedSignals: null,
    memoryUpdates: null,
    brief: null,
  })

  return result
}