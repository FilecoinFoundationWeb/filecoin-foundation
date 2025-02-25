import { type BaseLinkProps } from '@filecoin-foundation/ui/BaseLink'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import type { Route } from 'next'

import { ExternalTextLink } from './ExternalTextLink'
import { InternalTextLink } from './InternalTextLink'

export function SmartTextLink({ href, baseDomain, ...rest }: BaseLinkProps) {
  const isExternal = isExternalLink(href, baseDomain)

  return isExternal ? (
    <ExternalTextLink href={href} {...rest} />
  ) : (
    <InternalTextLink href={href as Route} {...rest} />
  )
}
