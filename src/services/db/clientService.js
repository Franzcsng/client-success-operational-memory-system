import { supabase } from "@/lib/supabase"

export async function getClient(clientId) {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .eq("id", clientId)
    .single()

  if (error) throw error
  return data
}