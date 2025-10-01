import type { AnchorHTMLAttributes } from 'react'

import type { Route } from 'next'

import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'

import { ExternalTextLink } from './ExternalTextLink'
import { InternalTextLink } from './InternalTextLink'

type SmartTextLinkProps = {
  href: string
  baseDomain: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function SmartTextLink({
  href,
  baseDomain,
  ...rest
}: SmartTextLinkProps) {
  const isExternal = isExternalLink(href, baseDomain)

  return isExternal ? (
    <ExternalTextLink href={href} {...rest} />
  ) : (
    <InternalTextLink href={href as Route} {...rest} />
  )
}
