import Link from 'next/link'

import { Icon } from '@filecoin-foundation/ui/Icon'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import type { Icon as IconType } from '@phosphor-icons/react'
import { CaretRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type CTALinkProps = {
  href: string
  children: string
  icon?: IconType
}

export function CTALink({ href, children, icon }: CTALinkProps) {
  const isExternal = isExternalLink(href, BASE_DOMAIN)

  return (
    <Link
      href={href}
      className="text-brand-primary-300 focus:brand-outline inline-flex items-center gap-1.5 font-bold hover:underline"
    >
      <span className="pb-0.5">{children}</span>
      <Icon
        component={getIconComponent(isExternal, icon)}
        size={18}
        weight="bold"
      />
    </Link>
  )
}

function getIconComponent(isExternal: boolean, icon: IconType) {
  if (icon) {
    return icon
  }

  if (isExternal) {
    return ArrowUpRight
  }

  return CaretRight
}
