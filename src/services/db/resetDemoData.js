import { supabase } from "@/lib/supabase"


export async function resetDemoData() {
  // delete meeting briefs
  const { error: briefError } = await supabase
    .from("meeting_briefs")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000")

  if (briefError) {
    throw briefError
  }

  // delete client memory
  const { error: memoryError } = await supabase
    .from("client_memory")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000")

  if (memoryError) {
    throw memoryError
  }

  return {
    success: true,
  }
}