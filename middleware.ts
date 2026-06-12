import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { isAuthorized, unauthorized } from "@/lib/admin-auth"

// Protects every /admin route with HTTP basic auth (ADMIN_USER / ADMIN_PASS),
// plus mutating calls to the Puck API. Auth internals live in lib/admin-auth
// so swapping to NextAuth later only touches that module (and this matcher).
export function middleware(req: NextRequest) {
  // Public read of page data; everything else (saves, uploads, versions,
  // export, the editor itself) requires auth.
  const isPublicRead = req.nextUrl.pathname === "/api/puck" && req.method === "GET"
  if (isPublicRead) return NextResponse.next()
  if (!isAuthorized(req)) return unauthorized()
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/puck/:path*"],
}
