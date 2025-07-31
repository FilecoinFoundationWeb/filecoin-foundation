import type { ComponentType } from 'react'

import Link, { type LinkProps } from 'next/link'

export type LogoLinkProps = {
  logo: ComponentType<React.SVGProps<SVGSVGElement>>
  onNavigate?: LinkProps<unknown>['onNavigate']
  color?: `text-${string}`
} & Pick<React.SVGProps<SVGSVGElement>, 'height'>

export function LogoLink({
  logo: Logo,
  onNavigate,
  color,
  ...svgProps
}: LogoLinkProps) {
  return (
    <Link
      className="focus:brand-outline inline-block"
      href="/"
      aria-label="Go to homepage"
      onNavigate={onNavigate}
    >
      <Logo {...svgProps} className={color} />
      <span className="sr-only">Home</span>
    </Link>
  )
}
