import { type BaseLinkProps } from '@filecoin-foundation/ui/BaseLink'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'


type ExternalLinkProps = Omit<BaseLinkProps, 'href' | 'baseDomain'> & {
  href: string
}

export function ExternalTextLink({
  className,
  children,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      className={clsx('text-link inline-block text-pretty', className)}
      {...rest}
    >
      {children}
      <span className="ml-1 inline-flex self-center">
        <Icon component={ArrowUpRight} size={16} color="subtle" />
      </span>
    </a>
  )
}
