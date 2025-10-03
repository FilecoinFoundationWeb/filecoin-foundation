import type { AnchorHTMLAttributes, ComponentProps, ComponentType } from 'react'

import type { Route } from 'next'

import Link from 'next/link'

import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'

import { ExternalTextLink } from './ExternalTextLink'
import { InternalTextLink } from './InternalTextLink'

type GenericLink = Omit<ComponentProps<typeof Link>, 'locale'>

export type SmartTextLinkProps = {
  href: string
  baseDomain: string
  LinkComponent?: ComponentType<GenericLink>
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function SmartTextLink({
  href,
  baseDomain,
  LinkComponent = Link,
  ...rest
}: SmartTextLinkProps) {
  const isExternal = isExternalLink(href, baseDomain)

  return isExternal ? (
    <ExternalTextLink href={href} {...rest} />
  ) : (
    <InternalTextLink
      LinkComponent={LinkComponent}
      href={href as Route}
      {...rest}
    />
  )
}
