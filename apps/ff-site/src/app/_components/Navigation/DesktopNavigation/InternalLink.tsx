import type { ComponentProps } from 'react'

import Link from 'next/link'

import type { Route } from 'next'

type InternalLinkProps = Omit<
  ComponentProps<typeof Link>,
  'href' | 'children'
> & {
  href: Route
  label: string
  description?: string
  ariaLabel?: string
}

export function InternalLink({
  href,
  label,
  description,
  ariaLabel,
  className,
  ...rest
}: InternalLinkProps) {
  return (
    <Link href={href} aria-label={ariaLabel} className={className} {...rest}>
      <p className="mb-1 font-bold">{label}</p>
      {description && <p className="text-brand-300">{description}</p>}
    </Link>
  )
}
