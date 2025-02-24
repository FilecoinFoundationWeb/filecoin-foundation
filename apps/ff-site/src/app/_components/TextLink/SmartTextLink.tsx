import type { Route } from 'next'

import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { type BaseLinkProps } from '@/components/BaseLink'

import { ExternalTextLink } from './ExternalTextLink'
import { InternalTextLink } from './InternalTextLink'

export function SmartTextLink({ href, ...rest }: BaseLinkProps) {
  const isExternal = isExternalLink(href, BASE_DOMAIN)
  return isExternal ? (
    <ExternalTextLink href={href} {...rest} />
  ) : (
    <InternalTextLink href={href as Route} {...rest} />
  )
}
