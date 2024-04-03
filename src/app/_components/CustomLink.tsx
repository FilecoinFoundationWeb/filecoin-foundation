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

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  )
}
