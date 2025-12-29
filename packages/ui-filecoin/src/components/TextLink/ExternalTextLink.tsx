import type { AnchorHTMLAttributes } from 'react'

import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from '../Icon'

export type ExternalTextLinkProps = {
  href: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function ExternalTextLink({
  className,
  children,
  ...rest
}: ExternalTextLinkProps) {
  return (
    <a
      {...rest}
      className={clsx('text-link text-pretty', className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="ml-1 inline-flex self-center">
        <Icon component={ArrowUpRightIcon} size={16} />
      </span>
    </a>
  )
}
