import type { ComponentType, ComponentProps } from 'react'

import Link from 'next/link'

type LinkProps = ComponentProps<typeof Link>

export type LogoLinkProps = {
  LinkComponent?: ComponentType<Omit<LinkProps, 'locale'>>
  logo: ComponentType<React.SVGProps<SVGSVGElement>>
  onNavigate?: LinkProps['onNavigate']
  color?: `text-${string}`
} & Pick<React.SVGProps<SVGSVGElement>, 'height'>

export function LogoLink({
  logo: Logo,
  onNavigate,
  LinkComponent = Link,
  color,
  ...svgProps
}: LogoLinkProps) {
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
