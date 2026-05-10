import { ChatOpenAI } from "@langchain/openai"
import { llm } from "@/lib/llm"

export async function generateBrief(state) {
  const prompt = `
  Create a structured meeting brief:

  PRIORITIZED CONTEXT:
  ${state.prioritizedSignals}

    Return ONLY valid JSON 
    Do NOT wrap in markdown.
    Do NOT include \`\`\` or "json".    
    Return format:

    {
      summary: "",
      risks: [],
      talkingPoints: [],
      actionItems: []
    },
  `

    const res = await llm.invoke(prompt)
    const parsed = JSON.parse(res.content)

    return {
        ...state,
        brief: parsed,
    }
}