import type { Route } from 'next'

type Link = string | Route

export function isExternalLink(href: string) {
  return !isInternalLink(href)
}

export function isInternalLink(href: Link) {
  return href.startsWith('/') || href.startsWith('#')
}
