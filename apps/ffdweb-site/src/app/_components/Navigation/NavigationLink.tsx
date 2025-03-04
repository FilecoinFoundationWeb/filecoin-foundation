'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { clsx } from 'clsx'

import { TOUCH_TARGET_NAV_LINK } from './constants'

type NavigationLinkProps = {
  label: string
  href: LinkProps['href']
  onClick?: LinkProps['onClick']
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
        'focus:brand-outline aria-current:text-brand-primary-300 aria-current:bg-brand-primary-900 inline-block text-neutral-200 hover:bg-neutral-800',
      )}
      {...rest}
    >
      {label}
    </Link>
  )
}
