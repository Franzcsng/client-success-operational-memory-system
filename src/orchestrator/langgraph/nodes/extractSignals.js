import { extractSignalsPrompt } from "./prompts/extractSignals.prompt"
import { llm } from "@/lib/llm"


export async function extractSignals(state) {

  const res = await llm.invoke(extractSignalsPrompt(state))
  const parsed = JSON.parse(res.content)

  

  return {
    ...state,
    signals: parsed
  }
}