import type { ComponentProps } from 'react'

import { clsx } from 'clsx'
import Link from 'next/link'

type LinkProps = ComponentProps<typeof Link>

type InternalTextLinkProps = LinkProps & {
  LinkComponent?: React.ComponentType<Omit<LinkProps, 'locale'>>
}

export function InternalTextLink({
  className,
  children,
  LinkComponent = Link,
  ...rest
}: InternalTextLinkProps) {
  return (
    <LinkComponent className={clsx('text-link', className)} {...rest}>
      {children}
    </LinkComponent>
  )
}
