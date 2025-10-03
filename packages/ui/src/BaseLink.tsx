import type { AnchorHTMLAttributes, ComponentProps, ComponentType } from 'react'

import Link from 'next/link'

import { isInternalLink } from '@filecoin-foundation/utils/linkUtils'

type GenericLink = ComponentType<ComponentProps<typeof Link>>

export type BaseLinkProps = {
  href: string
  baseDomain: string
  LinkComponent?: GenericLink
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function BaseLink({
  href,
  baseDomain,
  LinkComponent = Link,
  ...rest
}: BaseLinkProps) {
  const isInternal = isInternalLink(href, baseDomain)
  const rel = href.startsWith('mailto:') ? undefined : 'noopener noreferrer'

  if (isInternal) {
    return <LinkComponent href={href as ComponentProps<typeof Link>['href']} {...rest} />
  }

  return <a rel={rel} href={href} {...rest} />
}
