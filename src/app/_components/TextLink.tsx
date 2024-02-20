import Link from 'next/link'

import clsx from 'clsx'
import { Route } from 'next'

type TextLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export function TextLink({
  href,
  children,
  className,
  ...props
}: TextLinkProps) {
  const isInternalLink = href.startsWith('/') || href.startsWith('#')
  const baseStyles = `underline`

  className = clsx(baseStyles, className)

  if (isInternalLink) {
    return (
      <Link href={href as Route} className={className} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  )
}
