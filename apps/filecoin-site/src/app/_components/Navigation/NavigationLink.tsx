'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { clsx } from 'clsx'

import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

import type { PathValues } from '@/constants/paths'

const DESKTOP_TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'p-3',
  touchAreaOffset: '-mx-3',
}

const MOBILE_TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'px-5 py-6',
  touchAreaOffset: '-mx-5',
}

const desktopStyle = clsx(
  'text-[var(--color-text-navigation-link)] hover:bg-[var(--color-bg-navigation-link-hover)] focus:bg-[var(--color-bg-navigation-link-hover)] aria-[current=true]:text-[var(--color-text-navigation-link-active)]',
  DESKTOP_TOUCH_TARGET.touchAreaPadding,
  DESKTOP_TOUCH_TARGET.touchAreaOffset,
)

const mobileStyle = clsx(
  'text-[var(--color-text-base)] aria-[current=true]:text-[var(--color-text-navigation-link-mobile-active)]',
  MOBILE_TOUCH_TARGET.touchAreaPadding,
  MOBILE_TOUCH_TARGET.touchAreaOffset,
)

type NavigationLinkProps = {
  on: 'mobile' | 'desktop'
  label: string
  href: LinkProps<PathValues>['href']
  onNavigate?: LinkProps<PathValues>['onNavigate']
}

export function NavigationLink({
  href,
  label,
  on,
  ...rest
}: NavigationLinkProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href.toString())

  return (
    <Link
      href={href}
      aria-label={`Go to ${label} page`}
      aria-current={isActive}
      className={clsx(
        'focus:brand-outline inline-block font-medium',
        on === 'desktop' && desktopStyle,
        on === 'mobile' && mobileStyle,
      )}
      {...rest}
    >
      {label}
    </Link>
  )
}
