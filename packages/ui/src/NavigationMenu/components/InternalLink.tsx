import Link, { type LinkProps } from 'next/link'

import type { LinkItemProps } from '../types'

import { LinkDescription } from './LinkDescription'
import { LinkLabel } from './LinkLabel'

type InternalLinkProps = Omit<LinkProps<unknown>, 'children' | 'href'> &
  LinkItemProps

export function InternalLink({
  label,
  href,
  description,
  ...rest
}: InternalLinkProps) {
  return (
    <Link href={href as LinkProps<unknown>['href']} {...rest}>
      <LinkLabel>{label}</LinkLabel>

      {description && (
        <div className="mt-1">
          <LinkDescription>{description}</LinkDescription>
        </div>
      )}
    </Link>
  )
}
