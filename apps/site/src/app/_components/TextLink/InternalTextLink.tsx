import Link from 'next/link'

import { clsx } from 'clsx'
import type { Route } from 'next'

import { type BaseLinkProps } from '@/components/BaseLink'

type InternalLinkProps = Omit<BaseLinkProps, 'href'> & {
  href: Route
}

export function InternalTextLink({
  className,
  children,
  ...rest
}: InternalLinkProps) {
  return (
    <Link className={clsx('text-link', className)} {...rest}>
      {children}
    </Link>
  )
}
