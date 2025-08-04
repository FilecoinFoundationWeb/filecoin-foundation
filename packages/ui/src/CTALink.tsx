import type { Icon as IconType } from '@phosphor-icons/react'
import {
  CaretRightIcon,
  ArrowUpRightIcon,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { BaseLink, type BaseLinkProps } from '@filecoin-foundation/ui/BaseLink'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'

export type CTALinkProps = {
  href: BaseLinkProps['href']
  children: string
  icon?: IconType
  inset?: boolean
  textClassName?: string
  baseDomain: string
  ariaLabel?: string
}

export function CTALink({
  href,
  children,
  icon,
  inset,
  textClassName,
  baseDomain,
  ariaLabel,
}: CTALinkProps) {
  const isExternal = isExternalLink(href, baseDomain)

  return (
    <BaseLink
      aria-label={ariaLabel}
      href={href}
      baseDomain={baseDomain}
      className={clsx(
        'cta-link focus:brand-outline inline-flex items-center gap-1.5 hover:underline',
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
    return ArrowUpRightIcon
  }

  return CaretRightIcon
}
