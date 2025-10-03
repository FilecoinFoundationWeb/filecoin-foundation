import type { ComponentProps, ComponentType } from 'react'

import { clsx } from 'clsx'
import Link from 'next/link'

type LinkProps = Omit<ComponentProps<typeof Link>, 'locale'>

export type InternalTextLinkProps = LinkProps & {
  LinkComponent?: ComponentType<LinkProps>
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
