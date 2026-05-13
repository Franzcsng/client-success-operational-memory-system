import { resetDemoData } from "@/services/db/resetDemoData"

export async function POST() {
  try {
    await resetDemoData()

    return Response.json({
      success: true,
    })
  } catch (err) {
    console.error(err)

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}