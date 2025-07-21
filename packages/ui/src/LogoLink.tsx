import type { ComponentType } from 'react'

import Link, { type LinkProps } from 'next/link'

type LogoLinkProps = {
  logo: ComponentType<React.SVGProps<SVGSVGElement>>
  logoProps?: React.SVGProps<SVGSVGElement>
} & Omit<LinkProps<unknown>, 'href' | 'children' | 'className'>

export function LogoLink({ logo: Logo, logoProps, ...rest }: LogoLinkProps) {
  return (
    <Link
      className="focus:brand-outline"
      href="/"
      aria-label="Go to homepage"
      {...rest}
    >
      <Logo {...logoProps} />
      <span className="sr-only">Home</span>
    </Link>
  )
}
