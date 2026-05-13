import { generateBriefPrompt } from "./prompts/generateBrief.prompt"
import { llm } from "@/lib/llm"

export async function generateBrief(state) {

    const res = await llm.invoke(generateBriefPrompt(state))
    const parsed = JSON.parse(res.content)

    return {
        ...state,
        brief: parsed,
    }
}