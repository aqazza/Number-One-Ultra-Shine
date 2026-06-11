import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { isAuthorized, unauthorized } from "@/lib/admin-auth"

// Protects every /admin route with HTTP basic auth (ADMIN_USER / ADMIN_PASS),
// plus mutating calls to the Puck API. Auth internals live in lib/admin-auth
// so swapping to NextAuth later only touches that module (and this matcher).
export function middleware(req: NextRequest) {
  const isApiRead = req.nextUrl.pathname.startsWith("/api/puck") && req.method === "GET"
  if (isApiRead) return NextResponse.next()
  if (!isAuthorized(req)) return unauthorized()
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/puck"],
}
