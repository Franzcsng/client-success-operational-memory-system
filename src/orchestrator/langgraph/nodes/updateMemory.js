export async function updateMemory(state) {
  const prompt = `
  Identify recurring issues or long-term patterns:

  ${state.signals}

  Return structured memory updates.
  `

  const res = await llm.invoke(prompt)

  // later: write to Supabase here

  return {
    ...state,
    memoryUpdates: res.content,
  }
}