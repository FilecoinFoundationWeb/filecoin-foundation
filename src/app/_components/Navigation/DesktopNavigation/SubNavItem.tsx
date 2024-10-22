import Link from 'next/link'

import { ArrowUpRight } from '@phosphor-icons/react'
import { clsx } from 'clsx'
import type { Route } from 'next'

import { Icon } from '@/components/Icon'

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

export function SubNavItem({
  href,
  label,
  description,
  linkType = 'internal',
}: SubNavItemProps) {
  const external = linkType !== 'internal'

  const baseStyles = 'focus:brand-outline group w-full rounded-lg'
  const extendedStyles = {
    internal: 'inline-block bg-brand-800 p-4 hover:bg-brand-700',
    externalGhost: 'inline-block bg-brand-800 p-4 hover:bg-brand-700',
    externalPrimary:
      'inline-block border border-brand-500 bg-brand-700 p-4 hover:border-brand-400 focus:border-transparent',
    externalSecondary:
      'inline-flex items-center justify-center gap-1 bg-brand-800 px-3 py-5 text-brand-300 hover:bg-brand-700',
  }

  const linkClasses = clsx(baseStyles, extendedStyles[linkType])
  const commonProps = {
    className: linkClasses,
    'aria-label': `${label} page (${external ? 'external link' : 'internal link'})`,
  }

  return external ? (
    <a href={href} {...commonProps} rel="noopener noreferrer">
      <div className="inline-flex items-center gap-1">
        <p className="font-bold">{label}</p>
        <span className="text-brand-400 group-hover:text-brand-100">
          <Icon component={ArrowUpRight} size={20} />
        </span>
      </div>
      {description && <p className="mt-1 text-brand-300">{description}</p>}
    </a>
  ) : (
    <Link href={href as Route} {...commonProps}>
      <p className="mb-1 font-bold">{label}</p>
      <p className="text-brand-300">{description}</p>
    </Link>
  )
}
