import type { AnchorHTMLAttributes } from 'react'

import { ArrowUpRightIcon } from '@phosphor-icons/react'

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
      <div className="group inline-flex items-center gap-1">
        <p className="font-bold">{label}</p>
        <span className="text-brand-400 group-hover:text-brand-100">
          <Icon component={ArrowUpRightIcon} size={20} />
        </span>
      </div>
      {description && <p className="text-brand-300 mt-1">{description}</p>}
    </a>
  )
}
