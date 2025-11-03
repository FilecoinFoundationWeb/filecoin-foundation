import type { ComponentProps, ComponentType } from 'react'

import { clsx } from 'clsx'
import Link from 'next/link'

type LinkProps = Omit<ComponentProps<typeof Link>, 'locale'>

export type InternalTextLinkProps = LinkProps & {
  InternalLinkComponent?: ComponentType<LinkProps>
}

export function InternalTextLink({
  className,
  children,
  InternalLinkComponent = Link,
  ...rest
}: InternalTextLinkProps) {
  return (
    <InternalLinkComponent className={clsx('text-link', className)} {...rest}>
      {children}
    </InternalLinkComponent>
  )
}
