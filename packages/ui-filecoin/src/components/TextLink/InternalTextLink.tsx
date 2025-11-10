import { clsx } from 'clsx'
import Link from 'next/link'

import { type GenericLinkType, type GenericLinkProps } from './types'

export type InternalTextLinkProps = GenericLinkProps & {
  InternalLinkComponent?: GenericLinkType
}

export function InternalTextLink({
  className,
  children,
  InternalLinkComponent = Link as GenericLinkType,
  ...rest
}: InternalTextLinkProps) {
  return (
    <InternalLinkComponent className={clsx('text-link', className)} {...rest}>
      {children}
    </InternalLinkComponent>
  )
}
