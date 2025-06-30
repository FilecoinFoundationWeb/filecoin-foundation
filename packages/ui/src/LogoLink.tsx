import type { ComponentType } from 'react'

import Link, { type LinkProps } from 'next/link'

type LogoLinkProps = {
  logo: ComponentType<React.SVGProps<SVGSVGElement>>
} & Omit<LinkProps, 'href' | 'children' | 'className'>

export function LogoLink({ logo: Logo, ...rest }: LogoLinkProps) {
  return (
    <Link
      className="focus:brand-outline"
      href="/"
      aria-label="Go to homepage"
      {...rest}
    >
      <Logo />
      <span className="sr-only">Home</span>
    </Link>
  )
}
