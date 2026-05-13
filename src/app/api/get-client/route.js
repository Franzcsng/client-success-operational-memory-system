import { getClient } from "@/services/db/getClientService"

export async function POST(req) {
  try {
    const body = await req.json()

    const { clientId } = body

    const client = await getClient(clientId)

    return Response.json({
      success: true,
      client,
    })
  } catch (err) {
    console.error(err)

    return Response.json(
      {
        success: false,
        error: err.message,
      },
      {
        status: 500,
      }
    )
  }
}