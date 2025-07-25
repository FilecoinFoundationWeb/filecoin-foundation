import type { AnchorHTMLAttributes } from 'react'

import type { Route } from 'next'

import Link from 'next/link'

import { isInternalLink } from '@filecoin-foundation/utils/linkUtils'

export type BaseLinkProps = {
  href: string | Route
  baseDomain: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function BaseLink({ href, baseDomain, ...rest }: BaseLinkProps) {
  const isInternal = isInternalLink(href, baseDomain)
  const rel = href.startsWith('mailto:') ? undefined : 'noopener noreferrer'

  if (isInternal) {
    return <Link href={href as Route} {...rest} />
  }

  return <a rel={rel} href={href} {...rest} />
}
