import { ChatOpenAI } from "@langchain/openai"
import { llm } from "@/lib/llm"


export async function updateMemory(state) {
const prompt = `
You are maintaining long-term operational memory for a client account.

Analyze the meeting signals and identify:

- recurring issues
- operational risks
- communication preferences
- relationship insights
- long-term patterns

Return ONLY meaningful long-term memory items.

Return multiple memory updates if necessary.

Do NOT include temporary or low-value observations.

Return ONLY valid JSON 
Do NOT wrap in markdown.
Do NOT include \`\`\` or "json".    
Return format:

[
  {
    "memory_type": "risk",
    "content": "Client repeatedly expressed frustration about response delays.",
    "importance_score": 8,
    "status": "active"
  }
]

SIGNALS:
${JSON.stringify(state.signals)}

EXISTING MEMORY:
${JSON.stringify(state.existingMemory)}
`

    const res = await llm.invoke(prompt)
    const parsed = JSON.parse(res.content)  

    return {
    ...state,
    memoryUpdates: parsed,
}
}