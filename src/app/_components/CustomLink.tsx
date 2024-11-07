import Link from 'next/link'

import type { Route } from 'next'

import { isInternalLink } from '@/utils/linkUtils'

export type CustomLinkProps = {
  href: string | Route
  children: React.ReactNode
} & Omit<React.ComponentProps<'a'>, 'href'>

export function CustomLink({
  href,
  className,
  children,
  ...rest
}: CustomLinkProps) {
  const isInternal = isInternalLink(href)
  const rel = href.startsWith('mailto:') ? undefined : 'noopener noreferrer'

  if (isInternal) {
    return (
      <Link href={href as Route} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a rel={rel} href={href} className={className} {...rest}>
      {children}
    </a>
  )
}
