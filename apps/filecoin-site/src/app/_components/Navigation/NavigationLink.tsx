'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { clsx } from 'clsx'

import type { PathValues } from '@/constants/paths'

import { TOUCH_TARGET_NAV_LINK } from './constants'

type NavigationLinkProps = {
  label: string
  href: LinkProps<PathValues>['href']
  onNavigate?: LinkProps<PathValues>['onNavigate']
}

export function NavigationLink({ href, label, ...rest }: NavigationLinkProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href.toString())

  return (
    <Link
      href={href}
      aria-label={`Go to ${label} page`}
      aria-current={isActive}
      className={clsx(
        TOUCH_TARGET_NAV_LINK.touchAreaPadding,
        TOUCH_TARGET_NAV_LINK.touchAreaOffset,
        'navigation-link',
      )}
      {...rest}
    >
      {label}
    </Link>
  )
}
