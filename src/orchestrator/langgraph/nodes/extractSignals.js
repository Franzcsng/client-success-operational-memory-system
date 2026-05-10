import { ChatOpenAI } from "@langchain/openai"
import { llm } from "@/lib/llm"


export async function extractSignals(state) {
  const prompt = `
  Extract key operational signals from this context:

  ${JSON.stringify(state.context)}

  Return ONLY valid JSON 
  Do NOT wrap in markdown.
  Do NOT include \`\`\` or "json".    
  Return format:

  {
    "risks": [],
    "issues": [],
    "actionItems": [],
    "sentiment": ""
  }
  `

  const res = await llm.invoke(prompt)
  const parsed = JSON.parse(res.content)

  return {
    ...state,
    signals: parsed
  }
}