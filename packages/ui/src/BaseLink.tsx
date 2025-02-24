import Link from 'next/link'

import { isInternalLink } from '@filecoin-foundation/utils/linkUtils'
import type { Route } from 'next'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type BaseLinkProps = {
  href: string | Route
} & Omit<React.ComponentProps<'a'>, 'href'>

export function BaseLink({ href, ...rest }: BaseLinkProps) {
  const isInternal = isInternalLink(href, BASE_DOMAIN)
  const rel = href.startsWith('mailto:') ? undefined : 'noopener noreferrer'

  if (isInternal) {
    return <Link href={href as Route} {...rest} />
  }

  return <a rel={rel} href={href} {...rest} />
}
