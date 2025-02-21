import Link from 'next/link'

import type { Route } from 'next'

import { isInternalLink } from '@/utils/linkUtils'

export type BaseLinkProps = {
  href: string | Route
} & Omit<React.ComponentProps<'a'>, 'href'>

export function BaseLink({ href, ...rest }: BaseLinkProps) {
  const isInternal = isInternalLink(href)
  const rel = href.startsWith('mailto:') ? undefined : 'noopener noreferrer'

  if (isInternal) {
    return <Link href={href as Route} {...rest} />
  }

  return <a rel={rel} href={href} {...rest} />
}
