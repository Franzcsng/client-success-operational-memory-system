import { ChatOpenAI } from "@langchain/openai"

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
})

export async function extractSignals(state) {
  const prompt = `
  Extract key operational signals from this context:

  ${JSON.stringify(state.context)}

  Return:
  - risks
  - issues
  - action_items
  - sentiment
  `

  const res = await llm.invoke(prompt)

  return {
    ...state,
    signals: res.content,
  }
}