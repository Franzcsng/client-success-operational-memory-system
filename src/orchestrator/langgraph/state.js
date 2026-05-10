export function createInitialState(context) {
  return {
    context,
    existingMemory: [],
    
    signals: {
      risks: [],
      issues: [],
      actionItems: [],
      sentiment: "",
    },

    prioritizedSignals: {
      criticalRisks: [],
      topTalkingPoints: [],
      priorities: [],
    },

    memoryUpdates: [],

    brief: {
      summary: "",
      risks: [],
      talkingPoints: [],
      actionItems: [],
    },
  }
}

