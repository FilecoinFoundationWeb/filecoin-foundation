import Link from 'next/link'

import type { Route } from 'next'

import type { LinkProps } from './SubNavItem'

export function InternalLink({
  href,
  label,
  description,
  ariaLabel,
  className,
}: LinkProps) {
  return (
    <Link href={href as Route} aria-label={ariaLabel} className={className}>
      <p className="mb-1 font-bold">{label}</p>
      {description && <p className="text-brand-300">{description}</p>}
    </Link>
  )
}
