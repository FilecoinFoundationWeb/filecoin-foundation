import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from '@filecoin-foundation/ui/Icon'

export type ExternalTextLinkProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export function ExternalTextLink({
  className,
  children,
  ...rest
}: ExternalTextLinkProps) {
  return (
    <a className={clsx('text-link text-pretty', className)} {...rest}>
      {children}
      <span className="ml-1 inline-flex self-center">
        <Icon component={ArrowUpRightIcon} size={16} color="subtle" />
      </span>
    </a>
  )
}
