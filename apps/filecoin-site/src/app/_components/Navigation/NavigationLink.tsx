'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { clsx } from 'clsx'

import type { PathValues } from '@/constants/paths'

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
        on === 'desktop' && 'navigation-link',
        on === 'mobile' && 'mobile-navigation-link',
      )}
      {...rest}
    >
      {label}
    </Link>
  )
}
