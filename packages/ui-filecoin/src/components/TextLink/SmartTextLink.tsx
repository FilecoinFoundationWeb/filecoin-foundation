import type { AnchorHTMLAttributes } from 'react'

import Link from 'next/link'

import { isExternalLink } from '../../utils/linkUtils'

import { ExternalTextLink } from './ExternalTextLink'
import { InternalTextLink } from './InternalTextLink'
import { type GenericLinkType } from './types'

export type SmartTextLinkProps = {
  href: string
  baseDomain: string
  InternalLinkComponent?: GenericLinkType
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function SmartTextLink({
  href,
  baseDomain,
  InternalLinkComponent = Link as GenericLinkType,
  ...rest
}: SmartTextLinkProps) {
  const isExternal = isExternalLink(href, baseDomain)

  return isExternal ? (
    <ExternalTextLink href={href} {...rest} />
  ) : (
    <InternalTextLink
      InternalLinkComponent={InternalLinkComponent}
      href={href}
      {...rest}
    />
  )
}
