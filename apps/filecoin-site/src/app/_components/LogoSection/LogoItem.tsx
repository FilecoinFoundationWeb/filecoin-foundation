import type { ComponentType, SVGProps } from 'react'

export type LogoItemProps = {
  logo: ComponentType<SVGProps<SVGSVGElement>>
  alt: string
  size?: number
  href?: string
}

export function LogoItem({
  logo: SvgComponent,
  alt,
  size = 40,
  href,
}: LogoItemProps) {
  const logoElement = (
    <SvgComponent
      height={size}
      aria-label={href ? undefined : alt}
      aria-hidden={href ? 'true' : undefined}
      className="logo-section-logo-item max-w-full"
    />
  )

  return (
    <li className="flex items-center">
      {href ? (
        <a
          href={href}
          aria-label={`Visit ${alt} website`}
          className="focus:brand-outline"
        >
          {logoElement}
        </a>
      ) : (
        logoElement
      )}
    </li>
  )
}
