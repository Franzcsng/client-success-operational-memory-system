import { supabaseClient } from "@/lib/supabaseClient"

export async function getClientMemory(clientId, meetingId) {
  const { data, error } = await supabaseClient
    .from("client_memory")
    .select("*")
    .eq("client_id", clientId)
    .eq("source_meeting_id", meetingId)
    .order("last_seen_at", { ascending: false })

  if (error) {
    return null
  }

  return data
}

export async function getAllClientMemory(clientId) {
  const { data, error } = await supabaseClient
    .from("client_memory")
    .select("*")
    .eq("client_id", clientId)
    .order("last_seen_at", { ascending: false })

  if (error) {
    return null
  }

  return data
}