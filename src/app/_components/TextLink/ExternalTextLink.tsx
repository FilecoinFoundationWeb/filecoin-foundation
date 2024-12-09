import { clsx } from 'clsx'

import { type BaseLinkProps } from '@/components/BaseLink'

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
      <span className={styles.arrow}>{children}</span>
    </a>
  )
}
