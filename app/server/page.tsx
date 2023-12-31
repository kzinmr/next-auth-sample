import { getServerSession } from "next-auth/next"

import { authOptions } from "@/app/api/auth/options"

export const dynamic = 'force-dynamic'
export default async function ServerSidePage() {
  const session = await getServerSession(authOptions)

  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  return (
    <>
      <h1>Server Side Rendering</h1>
      <p>
        This page uses the <strong>getServerSession()</strong> method.
      </p>
      <p>
        Using <strong>getServerSession()</strong> is the recommended approach if you
        need to support Server Side Rendering with authentication.
      </p>
      <p>
        The advantage of Server Side Rendering is this page does not require
        client side JavaScript.
      </p>
      <p>
        The disadvantage of Server Side Rendering is that this page is slower to
        render.
      </p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  )
}

