import { supabase } from "@/lib/supabase"

export async function getClientMemory(clientId) {
  const { data, error } = await supabase
    .from("client_memory")
    .select("*")
    .eq("client_id", clientId)
    .order("last_seen_at", { ascending: false })

  if (error) throw error
  return data
}


export async function upsertClientMemory(memoryRows) {
  const { data, error } = await supabase
    .from("client_memory")
    .upsert(memoryRows, {
      onConflict: "id",
    })

  if (error) throw error
  return data
}

export async function insertClientMemory(memoryRows) {
  const { data, error } = await supabase
    .from("client_memory")
    .insert(memoryRows)
    .select()

  if (error) throw error
  return data
}