import type { Route } from 'next'

import { isExternalLink } from '@/utils/linkUtils'

import { type BaseLinkProps } from '@/components/BaseLink'

import { ExternalTextLink } from './ExternalTextLink'
import { InternalTextLink } from './InternalTextLink'

export function SmartTextLink({ href, ...rest }: BaseLinkProps) {
  const isExternal = isExternalLink(href)
  return isExternal ? (
    <ExternalTextLink href={href} {...rest} />
  ) : (
    <InternalTextLink href={href as Route} {...rest} />
  )
}
