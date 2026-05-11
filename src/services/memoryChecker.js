function isSimilarMemory(a, b) {
  const aWords = a.content.toLowerCase().split(" ")
  const bWords = b.content.toLowerCase().split(" ")

  const overlap = aWords.filter(word => bWords.includes(word)).length

  return overlap >= 4 // threshold 
}

export function deduplicateMemoryUpdates(existingMemory, newUpdates) {
  const merged = [...existingMemory]

  for (const update of newUpdates) {
    let foundMatch = false

    for (const mem of merged) {
      if (mem.memory_type === update.memory_type &&
          isSimilarMemory(mem, update)) {

        // MERGE 
        mem.frequency = (mem.frequency || 1) + 1
        mem.importance_score = Math.max(
          mem.importance_score,
          update.importance_score
        )
        mem.last_seen_at = new Date().toISOString()

        foundMatch = true
        break
      }
    }

    if (!foundMatch) {
      merged.push({
        ...update,
        frequency: 1,
        created_at: new Date().toISOString(),
        last_seen_at: new Date().toISOString(),
      })
    }
  }

  return merged
}