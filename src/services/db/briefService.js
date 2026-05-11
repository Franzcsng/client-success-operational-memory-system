import { supabase } from "@/lib/supabase"

export async function saveMeetingBrief(brief) {
  const { data, error } = await supabase
    .from("meeting_briefs")
    .insert(brief)
    .select()
    .single()

  if (error) throw error
  return data
}