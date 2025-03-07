import Link from 'next/link'

import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type CTALinkProps = {
  href: string
  children: string
}

export function CTALink({ href, children }: CTALinkProps) {
  const isExternal = isExternalLink(href, BASE_DOMAIN)

  if (isExternal) {
    return <ExternalTextLink href={href}>{children}</ExternalTextLink>
  }

  return (
    <Link
      href={href}
      className="text-brand-primary-300 focus:brand-outline inline-flex items-center gap-2 font-semibold hover:underline"
    >
      <span className="pb-0.5">{children}</span>
      <CaretRight size={16} weight="bold" />
    </Link>
  )
}
