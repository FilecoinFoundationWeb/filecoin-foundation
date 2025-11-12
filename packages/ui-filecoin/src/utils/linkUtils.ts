import type { Route } from 'next'

type Link = string | Route

export function isInternalLink(href: Link, baseDomain: string): boolean {
  const domainRegex = getDomainRegex(baseDomain)
  return href.startsWith('/') || href.startsWith('#') || domainRegex.test(href)
}

export function isExternalLink(href: string, baseDomain: string): boolean {
  return !isInternalLink(href, baseDomain)
}

export function isValidUrl(url: string) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

function getDomainRegex(baseDomain: string): RegExp {
  return new RegExp(`^(https?://)?(www\\.)?${baseDomain}`)
}
