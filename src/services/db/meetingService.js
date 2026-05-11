import { supabase } from "@/lib/supabase"

export async function createMeeting(meeting) {
  const { data, error } = await supabase
    .from("meetings")
    .insert(meeting)
    .select()
    .single()

  if (error) throw error
  return data
}