import Link from 'next/link'

import type { Route } from 'next'

type CustomLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function CustomLink({
  href,
  className,
  children,
  ...rest
}: CustomLinkProps) {
  const isInternalLink = href.startsWith('/') || href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href as Route} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  const target = href.startsWith('mailto:') ? undefined : '_blank'
  const rel = href.startsWith('mailto:') ? undefined : 'noopener noreferrer'

  return (
    <a href={href} target={target} rel={rel} className={className} {...rest}>
      {children}
    </a>
  )
}
