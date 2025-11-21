'use client'

import type { ComponentType } from 'react'

import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'

import type { GenericLinkProps } from '../TextLink/types'

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

type SmartLinkProps = {
  href: string
  ['aria-label']: GenericLinkProps['aria-label']
  ['aria-current']: GenericLinkProps['aria-current']
  className: GenericLinkProps['className']
  children: GenericLinkProps['children']
}

export type NavigationLinkProps = {
  on: 'mobile' | 'desktop'
  label: string
  href: string
  SmartLinkComponent: ComponentType<SmartLinkProps>
}

export function NavigationMainLink({
  href,
  label,
  on,
  SmartLinkComponent,
}: NavigationLinkProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href.toString())

  return (
    <SmartLinkComponent
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
    </SmartLinkComponent>
  )
}
