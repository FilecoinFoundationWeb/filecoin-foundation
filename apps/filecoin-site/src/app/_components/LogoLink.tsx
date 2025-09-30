import type { ComponentProps, ComponentType } from 'react'

import { Link } from '@/i18n/navigation'

type LinkProps = ComponentProps<typeof Link>

export type LogoLinkProps = {
  logo: ComponentType<React.SVGProps<SVGSVGElement>>
  onNavigate?: LinkProps['onNavigate']
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
