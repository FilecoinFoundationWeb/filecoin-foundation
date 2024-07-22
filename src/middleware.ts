import { NextResponse, type NextRequest } from 'next/server'

// This middleware rewrites potentially slugs (from the old site) to their lowercase equivalents.
// For example, the old site had content entries with URLs like /blog/Filecoin-nv19-Lightning-Upgrade
// On the new site, these URLs are now /blog/filecoin-nv19-lightning-upgrade
// We cannot use Next.js redirects because they are case insensitive, leading to an infinite loop of redirects.
// Instead, we use this middleware to handle all content entry links created before the launch of the new site that still may exist capitalized.

export default function redirectCapitalizedSlugMiddleware(
  request: NextRequest,
) {
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
