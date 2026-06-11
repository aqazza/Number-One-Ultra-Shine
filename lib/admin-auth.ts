// Minimal HTTP basic auth for /admin and Puck saves.
// Deliberately isolated so this module is the ONLY thing to replace when
// moving to NextAuth: keep `isAuthorized(request)` and swap its internals
// for a session check.

export function isAuthorized(req: Request): boolean {
  const user = process.env.ADMIN_USER
  const pass = process.env.ADMIN_PASS
  // Fail closed: if creds aren't configured, nothing is authorized.
  if (!user || !pass) return false

  const header = req.headers.get("authorization")
  if (!header?.startsWith("Basic ")) return false
  try {
    const decoded = atob(header.slice(6))
    const i = decoded.indexOf(":")
    if (i < 0) return false
    return decoded.slice(0, i) === user && decoded.slice(i + 1) === pass
  } catch {
    return false
  }
}

export function unauthorized(): Response {
  return new Response("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Ultra Shine Admin", charset="UTF-8"' },
  })
}
