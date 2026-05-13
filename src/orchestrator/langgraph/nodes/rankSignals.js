import { ChatOpenAI } from "@langchain/openai"
import { llm } from "@/lib/llm"

export async function rankSignals(state) {
  const prompt = `
  Rank these signals by importance for a client meeting:

  ${state.signals}

  Return ONLY valid JSON 
  Do NOT wrap in markdown.
  Do NOT include \`\`\` or "json".    
  - Every field MUST be populated based on available signals
  Return format:

    {
        criticalRisks: [],
        topTalkingPoints: [],
        priorities: []
    }
  `

    const res = await llm.invoke(prompt)
     const parsed = JSON.parse(res.content)
console.log(parsed)
    return {
        ...state,
        prioritizedSignals: parsed,
    }
}