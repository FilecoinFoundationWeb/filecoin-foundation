import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { type BaseLinkProps } from '@/components/BaseLink'

import { Icon } from '../Icon'

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
    <a className={clsx(styles.base, className)} {...rest}>
      {children}
      <span className="ml-1 inline-flex align-text-top">
        <Icon component={ArrowUpRight} size={16} color="brand-400" />
      </span>
    </a>
  )
}
