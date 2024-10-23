import { ArrowUpRight } from '@phosphor-icons/react'

import { Icon } from '@/components/Icon'

import type { LinkProps } from './SubNavItem'

export function ExternalLink({
  href,
  label,
  description,
  commonProps,
}: LinkProps) {
  return (
    <a href={href as string} {...commonProps} rel="noopener noreferrer">
      <div className="inline-flex items-center gap-1">
        <p className="font-bold">{label}</p>
        <span className="text-brand-400 group-hover:text-brand-100">
          <Icon component={ArrowUpRight} size={20} />
        </span>
      </div>
      {description && <p className="mt-1 text-brand-300">{description}</p>}
    </a>
  )
}
