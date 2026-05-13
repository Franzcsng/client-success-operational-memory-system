import { supabaseClient } from "@/lib/supabaseClient"

export async function getMeetingBrief(meetingId) {
  const { data, error } = await supabaseClient
    .from("meeting_briefs")
    .select("*")
    .eq("meeting_id", meetingId)
    .maybeSingle()

  if (error) {
    return null
  }

  return data
}