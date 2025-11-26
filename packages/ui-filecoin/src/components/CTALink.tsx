import type { Icon as IconType } from '@phosphor-icons/react'
import {
  CaretRightIcon,
  ArrowUpRightIcon,
} from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { getUIConfig } from '../config/ui-config'
import { isExternalLink } from '../utils/linkUtils'

import { BaseLink, type BaseLinkProps } from './BaseLink'
import { Icon } from './Icon'

export type CTALinkProps = {
  children: string
  icon?: IconType
  inset?: boolean
  textClassName?: string
  href: BaseLinkProps['href']
}

export function CTALink({
  href,
  children,
  icon,
  inset,
  textClassName,
}: CTALinkProps) {
  const { baseDomain } = getUIConfig()
  const isExternal = isExternalLink(href, baseDomain)

  return (
    <BaseLink
      href={href}
      className={clsx(
        'cta-link focus:brand-outline inline-flex items-center gap-1.5 hover:underline',
        inset && 'absolute inset-0',
      )}
    >
      <span
        className={clsx(
          'flex items-center gap-2',
          inset && 'absolute',
          textClassName,
        )}
      >
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
