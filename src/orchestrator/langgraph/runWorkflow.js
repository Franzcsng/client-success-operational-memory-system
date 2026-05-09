import { createBriefGraph } from "./workflows/meetingBriefGraph"

export async function runBriefWorkflow(context) {
  const graph = createBriefGraph()

  const result = await graph.invoke({
    context,
    signals: null,
    prioritizedSignals: null,
    memoryUpdates: null,
    brief: null,
  })

  return result
}