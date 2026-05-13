import { supabaseClient } from "@/lib/supabaseClient"

export async function getClientMeetings(clientId) {
  const { data, error } = await supabaseClient
    .from("meetings")
    .select("*")
    .eq("client_id", clientId)
    .order("created_at", { ascending: true })

  if (error) {
    return {
      data: null,
      error: {
        message: error.message,
        code: error.code,
      },
    }
  }

  return data
}