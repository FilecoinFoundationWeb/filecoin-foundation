'use client'

import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'

import type { TouchTarget } from '../../types/touchTarget'
import {
  SmartTextLink,
  type SmartTextLinkProps,
} from '../TextLink/SmartTextLink'

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'px-5 py-6',
  touchAreaOffset: '-mx-5',
}

const baseStyle = 'focus:brand-outline font-medium'

export const desktopStyle = clsx(
  baseStyle,
  'rounded-sm px-2.5 py-1.5 font-semibold text-[var(--color-navigation-link-text)] hover:bg-[var(--color-navigation-link-background-active)] focus:bg-[var(--color-navigation-link-background-active)] aria-[current=true]:bg-[var(--color-navigation-link-background-active)]',
)

export const mobileStyle = clsx(
  baseStyle,
  'font-medium text-[var(--color-text-base)]',
  TOUCH_TARGET.touchAreaPadding,
  TOUCH_TARGET.touchAreaOffset,
)

export type NavigationLinkProps = {
  on: 'mobile' | 'desktop'
  label: string
} & SmartTextLinkProps

export function NavigationMainLink({ href, label, on }: NavigationLinkProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href.toString())

  return (
    <SmartTextLink
      href={href}
      aria-label={`Go to ${label} page`}
      aria-current={isActive}
      className={clsx(
        'inline-block',
        on === 'desktop' && desktopStyle,
        on === 'mobile' && mobileStyle,
      )}
    >
      {label}
    </SmartTextLink>
  )
}
