import { Route } from 'next'

type Link = string | Route

export function isExternalLink(href: Link) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function isInternalLink(href: Link) {
  return href.startsWith('/') || href.startsWith('#')
}
