import type { ComponentProps } from 'react'

import { getUIConfig, type UIConfig } from '../../../config/ui-config'

import { LinkDescription } from './LinkDescription'
import { LinkLabel } from './LinkLabel'

export type InternalLinkProps = ComponentProps<UIConfig['Link']>

export function InternalLink({
  label,
  href,
  description,
  ...rest
}: InternalLinkProps) {
  const { Link } = getUIConfig()

  return (
    <Link href={href} {...rest}>
      <LinkLabel>{label}</LinkLabel>

      {description && (
        <div className="mt-1">
          <LinkDescription>{description}</LinkDescription>
        </div>
      )}
    </Link>
  )
}
