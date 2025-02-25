import Link from 'next/link'
import { clsx } from 'clsx'
import type { Route } from 'next'
import type { ComponentProps } from 'react'

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
