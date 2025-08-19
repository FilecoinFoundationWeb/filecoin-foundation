import type { ComponentProps } from 'react'

import Link from 'next/link'

import type { LinkItemProps } from '../types'

import { LinkDescription } from './LinkDescription'
import { LinkLabel } from './LinkLabel'

type InternalLinkProps = Omit<ComponentProps<typeof Link>, 'children'> &
  LinkItemProps

export function InternalLink({
  label,
  description,
  ...rest
}: InternalLinkProps) {
  return (
    <Link {...rest}>
      <LinkLabel>{label}</LinkLabel>

      {description && (
        <div className="mt-1">
          <LinkDescription>{description}</LinkDescription>
        </div>
      )}
    </Link>
  )
}
