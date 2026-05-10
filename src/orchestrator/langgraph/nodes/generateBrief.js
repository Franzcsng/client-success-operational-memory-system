import { ChatOpenAI } from "@langchain/openai"
import { llm } from "@/lib/llm"

export async function generateBrief(state) {
  const prompt = `
  Create a structured meeting brief:

  PRIORITIZED CONTEXT:
  ${state.prioritizedSignals}

    Return ONLY valid JSON in this format:

    {
      summary: "",
      risks: [],
      talkingPoints: [],
      actionItems: [],
    },
  `

    const res = await llm.invoke(prompt)
    const parsed = JSON.parse(res.content)

    return {
        ...state,
        brief: parsed,
    }
}