import Link from 'next/link'

import type { Route } from 'next'

import { isInternalLink } from '@/utils/linkUtils'

export type CustomLinkProps = {
  href: string
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'a'>

export function CustomLink({
  href,
  className,
  children,
  ...rest
}: CustomLinkProps) {
  const isInternal = isInternalLink(href)

  if (isInternal) {
    return (
      <Link href={href as Route} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  const rel = href.startsWith('mailto:') ? undefined : 'noopener noreferrer'

  return (
    <a
      href={href}
      rel={rel}
      aria-label="Opens external link"
      className={className}
      {...rest}
    >
      {children}
    </a>
  )
}
