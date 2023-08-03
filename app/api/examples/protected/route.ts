import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"

import { authOptions } from "@/app/api/auth/options"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (session) {
    return NextResponse.json({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  }

  return NextResponse.json({
    error: "You must be signed in to view the protected content on this page.",
  }, {status: 401})
}
