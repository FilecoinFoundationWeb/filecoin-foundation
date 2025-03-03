'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type DesktopLinkProps = {
  label: string
  href: LinkProps['href']
}

export function DesktopLink({ href, label, ...rest }: DesktopLinkProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href.toString())

  return (
    <Link
      href={href}
      aria-label={`Go to ${label} page`}
      className="focus:brand-outline aria-current:text-brand-primary-300 aria-current:bg-brand-primary-900 px-4 py-2.5 text-neutral-200 hover:bg-neutral-800"
      aria-current={isActive ? 'true' : 'false'}
      {...rest}
    >
      {label}
    </Link>
  )
}
