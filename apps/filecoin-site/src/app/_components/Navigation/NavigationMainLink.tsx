'use client'

import { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { clsx } from 'clsx'

import type { BaseLinkProps } from '@filecoin-foundation/ui/BaseLink'
import { SmartTextLink } from '@filecoin-foundation/ui/TextLink/SmartTextLink'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

import type { PathValues } from '@/constants/paths'
import { BASE_DOMAIN } from '@/constants/siteMetadata'

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'px-5 py-6',
  touchAreaOffset: '-mx-5',
}

const baseStyle = 'focus:brand-outline font-medium'

export const desktopStyle = clsx(
  baseStyle,
  'rounded-sm px-2.5 py-1.5 text-[var(--color-navigation-link-text)] hover:bg-[var(--color-navigation-link-background-active)] focus:bg-[var(--color-navigation-link-background-active)] aria-[current=true]:bg-[var(--color-navigation-link-background-active)]',
)

const mobileStyle = clsx(
  baseStyle,
  'text-[var(--color-text-base)]',
  TOUCH_TARGET.touchAreaPadding,
  TOUCH_TARGET.touchAreaOffset,
)

type NavigationLinkProps = {
  on: 'mobile' | 'desktop'
  label: string
  href: BaseLinkProps['href']
  onNavigate?: LinkProps<PathValues>['onNavigate']
}

export function NavigationMainLink({
  href,
  label,
  on,
  ...rest
}: NavigationLinkProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href.toString())

  return (
    <SmartTextLink
      href={href}
      baseDomain={BASE_DOMAIN}
      aria-label={`Go to ${label} page`}
      aria-current={isActive}
      className={clsx(
        'inline-block',
        on === 'desktop' && desktopStyle,
        on === 'mobile' && mobileStyle,
      )}
      {...rest}
    >
      {label}
    </SmartTextLink>
  )
}
