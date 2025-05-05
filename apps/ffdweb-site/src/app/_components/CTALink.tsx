import type { Icon as IconType } from '@phosphor-icons/react'
import { CaretRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { type BaseLinkProps, BaseLink } from '@filecoin-foundation/ui/BaseLink'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type CTALinkProps = {
  href: BaseLinkProps['href']
  children: string
  icon?: IconType
  inset?: boolean
  textClassName?: string
}

export function CTALink({
  href,
  children,
  icon,
  inset,
  textClassName,
}: CTALinkProps) {
  const isExternal = isExternalLink(href, BASE_DOMAIN)

  return (
    <BaseLink
      href={href}
      baseDomain={BASE_DOMAIN}
      className={clsx(
        'text-brand-primary-300 focus:brand-outline inline-flex items-center gap-1.5 font-bold hover:underline',
        inset && 'absolute inset-0',
      )}
    >
      <span className={clsx('flex items-center gap-2', textClassName)}>
        {children}
        <Icon
          component={getIconComponent(isExternal, icon)}
          size={16}
          weight="bold"
        />
      </span>
    </BaseLink>
  )
}

function getIconComponent(isExternal: boolean, icon?: IconType) {
  if (icon) {
    return icon
  }

  if (isExternal) {
    return ArrowUpRight
  }

  return CaretRight
}
