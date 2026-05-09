import { StateGraph } from "@langchain/langgraph"
import { extractSignals } from "../nodes/extractSignals"
import { rankSignals } from "../nodes/rankSignals"
import { updateMemory } from "../nodes/updateMemory"
import { generateBrief } from "../nodes/generateBrief"

export function createBriefGraph() {
  const graph = new StateGraph({
    channels: {
      context: null,
      signals: null,
      prioritizedSignals: null,
      memoryUpdates: null,
      brief: null,
    },
  })

  graph.addNode("extractSignals", extractSignals)
  graph.addNode("rankSignals", rankSignals)
  graph.addNode("updateMemory", updateMemory)
  graph.addNode("generateBrief", generateBrief)

  graph.setEntryPoint("extractSignals")

  graph.addEdge("extractSignals", "rankSignals")
  graph.addEdge("rankSignals", "updateMemory")
  graph.addEdge("updateMemory", "generateBrief")

  graph.setFinishPoint("generateBrief")

  return graph.compile()
}