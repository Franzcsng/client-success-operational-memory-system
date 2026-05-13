

export const extractSignalsPrompt = (state) => `
      You are an AI operational intelligence analyst.

        Your task:
        Extract operational signals from:
        1. Current meeting context
        2. Historical client memory

        Current Meeting Context:
        ${JSON.stringify(state.context, null, 2)}

        Historical Client Memory:
        ${JSON.stringify(state.existingMemory, null, 2)}

        Rules:
        - Return ONLY valid JSON
        - No markdown
        - No explanations
        - No code fences
        - No extra text

        Return format:

        {
            "risks": [],
            "issues": [],
            "actionItems": [],
            "sentiment": ""
        }
`