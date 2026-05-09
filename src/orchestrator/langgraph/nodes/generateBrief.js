export async function generateBrief(state) {
  const prompt = `
  Create a structured meeting brief:

  PRIORITIZED CONTEXT:
  ${state.prioritizedSignals}

  Include:
  - summary
  - risks
  - talking points
  - action items
  `

  const res = await llm.invoke(prompt)

  return {
    ...state,
    brief: res.content,
  }
}