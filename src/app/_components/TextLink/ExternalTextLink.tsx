import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { type BaseLinkProps } from '@/components/BaseLink'
import { Icon } from '@/components/Icon'

import styles from './TextLink.module.scss'

type ExternalLinkProps = Omit<BaseLinkProps, 'href'> & {
  href: string
}

export function ExternalTextLink({
  className,
  children,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      className={clsx('inline-flex items-center gap-1', styles.base, className)}
      {...rest}
    >
      {children}
      <Icon component={ArrowUpRight} size={16} color="brand-400" />
    </a>
  )
}
