import type { ComponentType, ComponentProps } from 'react'

import Link from 'next/link'

type LinkProps = ComponentProps<typeof Link>

export type HomeLogoLinkProps = {
  logo: ComponentType<React.SVGProps<SVGSVGElement>>
  onNavigate?: LinkProps['onNavigate']
  color?: `text-${string}`
  LinkComponent?: ComponentType<Omit<LinkProps, 'locale'>>
} & Pick<React.SVGProps<SVGSVGElement>, 'height'>

export function HomeLogoLink({
  logo: Logo,
  onNavigate,
  LinkComponent = Link,
  color,
  ...svgProps
}: HomeLogoLinkProps) {
  return (
    <LinkComponent
      className="focus:brand-outline inline-block"
      href={'/' as LinkProps['href']}
      aria-label="Go to homepage"
      onNavigate={onNavigate}
    >
      <Logo {...svgProps} className={color} />
      <span className="sr-only">Home</span>
    </LinkComponent>
  )
}
