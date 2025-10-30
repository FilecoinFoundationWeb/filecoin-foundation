import Link from 'next/link'

import type { GenericLinkProps, GenericLinkType } from '../../TextLink/types'
import type { LinkItemProps } from '../types'

import { LinkDescription } from './LinkDescription'
import { LinkLabel } from './LinkLabel'

type InternalLinkProps = GenericLinkProps &
  LinkItemProps & {
    InternalLinkComponent?: GenericLinkType
  }

export function InternalLink({
  label,
  href,
  description,
  InternalLinkComponent = Link,
  ...rest
}: InternalLinkProps) {
  return (
    <InternalLinkComponent href={href} {...rest}>
      <LinkLabel>{label}</LinkLabel>

      {description && (
        <div className="mt-1">
          <LinkDescription>{description}</LinkDescription>
        </div>
      )}
    </InternalLinkComponent>
  )
}
