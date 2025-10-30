import type { AnchorHTMLAttributes } from 'react'

import type { Route } from 'next'

import Link from 'next/link'

import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'

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
  InternalLinkComponent = Link,
  ...rest
}: SmartTextLinkProps) {
  const isExternal = isExternalLink(href, baseDomain)

  return isExternal ? (
    <ExternalTextLink href={href} {...rest} />
  ) : (
    <InternalTextLink
      InternalLinkComponent={InternalLinkComponent}
      href={href as Route}
      {...rest}
    />
  )
}
