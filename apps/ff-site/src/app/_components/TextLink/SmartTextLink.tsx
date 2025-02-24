import { type BaseLinkProps } from '@filecoin-foundation/ui/BaseLink'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import type { Route } from 'next'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { ExternalTextLink } from './ExternalTextLink'
import { InternalTextLink } from './InternalTextLink'

type SmartTextLinkProps = Omit<BaseLinkProps, 'baseDomain'>

export function SmartTextLink({ href, ...rest }: SmartTextLinkProps) {
  const isExternal = isExternalLink(href, BASE_DOMAIN)

  return isExternal ? (
    <ExternalTextLink href={href} {...rest} />
  ) : (
    <InternalTextLink href={href as Route} {...rest} />
  )
}
