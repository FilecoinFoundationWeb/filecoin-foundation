import Link from 'next/link'

import { type BaseLinkProps } from '@filecoin-foundation/ui/BaseLink'
import { clsx } from 'clsx'
import type { Route } from 'next'

type InternalLinkProps = Omit<BaseLinkProps, 'href' | 'baseDomain'> & {
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
