import type { AnchorHTMLAttributes, ComponentType } from 'react'

import Link, { type LinkProps } from 'next/link'

import { isInternalLink } from '@filecoin-foundation/utils/linkUtils'

type GenericLink = ComponentType<Omit<LinkProps<unknown>, 'locale'>>

export type BaseLinkProps = {
  href: string
  baseDomain: string
  InternalLinkComponent?: GenericLink
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function BaseLink({
  href,
  baseDomain,
  InternalLinkComponent = Link,
  ...rest
}: BaseLinkProps) {
  const isInternal = isInternalLink(href, baseDomain)
  const isMailto = href.startsWith('mailto:')

  if (isInternal) {
    return (
      <InternalLinkComponent
        href={href as LinkProps<unknown>['href']}
        {...rest}
      />
    )
  }

  if (isMailto) {
    return <a href={href} {...rest} />
  }

  return <a rel="noopener noreferrer" href={href} target="_blank" {...rest} />
}
