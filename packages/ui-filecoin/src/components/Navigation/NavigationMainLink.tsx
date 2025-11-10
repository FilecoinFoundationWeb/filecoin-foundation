'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { GenericLinkProps, GenericLinkType } from '../TextLink/types'

import type { TouchTarget } from './types'

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
  href: string
  InternalLinkComponent?: GenericLinkType
} & GenericLinkProps

export function NavigationMainLink({
  href,
  label,
  on,
  InternalLinkComponent = Link as GenericLinkType,
  ...rest
}: NavigationLinkProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href.toString())

  return (
    <InternalLinkComponent
      href={href}
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
    </InternalLinkComponent>
  )
}
