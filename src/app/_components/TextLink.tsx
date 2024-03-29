import Link from 'next/link'

import clsx from 'clsx'
import type { Route } from 'next'

type TextLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export function TextLink({
  href,
  children,
  className,
  ...rest
}: TextLinkProps) {
  const isInternalLink = href.startsWith('/') || href.startsWith('#')
  const baseStyles = `text-brand-300 hover:underline focus:outline-2 focus:outline-white`

  className = clsx(baseStyles, className)

  if (isInternalLink) {
    return (
      <Link href={href as Route} className={className} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  )
}
