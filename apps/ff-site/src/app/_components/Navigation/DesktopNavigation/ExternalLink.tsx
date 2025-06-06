import type { AnchorHTMLAttributes } from 'react'

import { ArrowUpRight } from '@phosphor-icons/react'

import { Icon } from '@filecoin-foundation/ui/Icon'

type ExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children'
> & {
  href: string
  label: string
  description?: string
  ariaLabel?: string
}

export function ExternalLink({
  href,
  label,
  description,
  ariaLabel,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
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
