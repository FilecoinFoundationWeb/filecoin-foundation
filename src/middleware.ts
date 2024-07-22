import { NextResponse, type NextRequest } from 'next/server'

export default function redirectMiddleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameWithoutLeadingSlash = pathname.slice(1)
  const [basePath, capitalizedSlug] = pathnameWithoutLeadingSlash.split('/')

  return NextResponse.redirect(
    new URL(`/${basePath}/` + capitalizedSlug.toLowerCase(), request.url),
  )
}

export const config = {
  matcher: `/(blog|events|ecosystem-explorer)/([A-Za-z0-9-]*[A-Z][A-Za-z0-9-]*)`,
}
