import { NextResponse, type NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const capitalizedSlug = pathname.replace('/blog/', '')
  const lowerCaseSlug = capitalizedSlug.toLowerCase()

  return NextResponse.redirect(new URL('/blog/' + lowerCaseSlug, request.url))
}

export const config = {
  matcher: '/blog/([A-Z][a-zA-Z0-9-]*$)',
}
