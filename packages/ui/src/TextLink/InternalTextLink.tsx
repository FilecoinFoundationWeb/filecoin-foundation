import type { ComponentProps } from 'react'

import type { Route } from 'next'

import { clsx } from 'clsx'
import Link from 'next/link'


type InternalTextLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: Route
}

export function InternalTextLink({
  className,
  children,
  ...rest
}: InternalTextLinkProps) {
  return (
    <Link className={clsx('text-link', className)} {...rest}>
      {children}
    </Link>
  )
}
