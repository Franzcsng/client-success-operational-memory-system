import { updateMemoryPrompt } from "./prompts/updateMemory.prompt"
import { llm } from "@/lib/llm"


export async function updateMemory(state) {

    const res = await llm.invoke(updateMemoryPrompt(state))
    const parsed = JSON.parse(res.content)  

    return {
    ...state,
    memoryUpdates: parsed,
}
}