import type { ComponentProps, ComponentType } from 'react'

import { getUIConfig, type UIConfig } from '../config/ui-config'

export type HomeLogoLinkProps = {
  logo: ComponentType<React.SVGProps<SVGSVGElement>>
  color?: `text-${string}`
  height: number
} & Omit<ComponentProps<UIConfig['Link']>, 'href'>

export function HomeLogoLink({
  logo: Logo,
  color,
  height,
  ...rest
}: HomeLogoLinkProps) {
  const { Link } = getUIConfig()

  return (
    <Link
      href="/"
      className="focus:brand-outline inline-block"
      aria-label="Go to homepage"
      {...rest}
    >
      <Logo className={color} height={height} />
      <span className="sr-only">Home</span>
    </Link>
  )
}
