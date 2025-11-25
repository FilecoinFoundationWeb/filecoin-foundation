import type { AnchorHTMLAttributes } from 'react'

import { getUIConfig } from '../config/ui-config'
import { isInternalLink } from '../utils/linkUtils'

export type BaseLinkProps = {
  href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function BaseLink({ href, ...rest }: BaseLinkProps) {
  const { baseDomain, Link } = getUIConfig()

  const isInternal = isInternalLink(href, baseDomain)
  const isMailto = href.startsWith('mailto:')

  if (isInternal) {
    return <Link href={href} {...rest} />
  }

  if (isMailto) {
    return <a href={href} {...rest} />
  }

  return <a rel="noopener noreferrer" href={href} target="_blank" {...rest} />
}
