import Link from 'next/link'

import type { Route } from 'next'

import { isInternalLink } from '@/utils/isInternalLink'

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
  if (isInternalLink(href)) {
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
