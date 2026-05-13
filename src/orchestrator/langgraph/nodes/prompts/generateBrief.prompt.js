

export const generateBriefPrompt = (state) => `
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