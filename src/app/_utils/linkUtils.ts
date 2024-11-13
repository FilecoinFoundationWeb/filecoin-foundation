import type { Route } from 'next'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

type Link = string | Route

export function isExternalLink(href: string) {
  return !isInternalLink(href)
}

const DOMAIN_REGEX = new RegExp(`^(https?:\/\/)?(www\.)?${BASE_DOMAIN}`)

export function isInternalLink(href: Link) {
  return href.startsWith('/') || href.startsWith('#') || DOMAIN_REGEX.test(href)
}
