import { clsx } from 'clsx'
import type { Route } from 'next'

import { ExternalLink } from './ExternalLink'
import { InternalLink } from './InternalLink'

export type SubNavItemProps = {
  href: string | Route
  label: string
  description?: string
  linkType?:
    | 'internal'
    | 'externalGhost'
    | 'externalPrimary'
    | 'externalSecondary'
}

export type LinkProps = Omit<SubNavItemProps, 'linkType'> & {
  className: string
  ariaLabel: string
}

const baseStyles = 'group w-full rounded-lg focus:brand-outline'
const extendedStyles = {
  internal: 'inline-block bg-brand-800 p-4 hover:bg-brand-700',
  externalGhost: 'inline-block bg-brand-800 p-4 hover:bg-brand-700',
  externalPrimary:
    'inline-block border border-brand-500 bg-brand-700 p-4 hover:border-brand-400 focus:border-transparent',
  externalSecondary:
    'inline-flex items-center justify-center gap-1 bg-brand-800 px-3 py-5 text-brand-300 hover:bg-brand-700',
}

export function SubNavItem({
  href,
  label,
  description,
  linkType = 'internal',
}: SubNavItemProps) {
  const external = linkType !== 'internal'
  const linkClasses = clsx(baseStyles, extendedStyles[linkType])
  const ariaLabel = `${label} page (${external ? 'external link' : 'internal link'})`

  const Link = external ? ExternalLink : InternalLink

  return (
    <Link
      href={href}
      label={label}
      description={description}
      className={linkClasses}
      ariaLabel={ariaLabel}
    />
  )
}
