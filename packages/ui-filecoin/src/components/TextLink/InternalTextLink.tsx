import type { ComponentProps } from 'react'

import { clsx } from 'clsx'

import { getUIConfig, type UIConfig } from '../../config/ui-config'

export type InternalTextLinkProps = ComponentProps<UIConfig['Link']>

export function InternalTextLink({
  className,
  children,
  ...rest
}: InternalTextLinkProps) {
  const { Link } = getUIConfig()

  return (
    <Link className={clsx('text-link', className)} {...rest}>
      {children}
    </Link>
  )
}
