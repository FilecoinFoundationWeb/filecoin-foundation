import type { Route } from 'next'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

type Link = string | Route

export function isExternalLink(href: string) {
  return !isInternalLink(href)
}

export function isInternalLink(href: Link) {
  return (
    href.startsWith('/') || href.startsWith('#') || href.includes(BASE_DOMAIN)
  )
}
