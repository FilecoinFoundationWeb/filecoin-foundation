import type { ComponentType, SVGProps } from 'react'

export type LogoItemProps = {
  logo: ComponentType<SVGProps<SVGSVGElement>>
  alt: string
  height?: number
  href?: string
}

export function LogoItem({
  logo: SvgComponent,
  alt,
  height = 40,
  href,
}: LogoItemProps) {
  const logoElement = (
    <SvgComponent
      height={height}
      aria-label={href ? undefined : alt}
      aria-hidden={href ? 'true' : undefined}
      className="h-auto max-w-full"
    />
  )

  return (
    <li className="flex items-center">
      {href ? (
        <a
          href={href}
          aria-label={`Visit ${alt} website`}
          className="focus:brand-outline transition-opacity hover:opacity-80"
        >
          {logoElement}
        </a>
      ) : (
        logoElement
      )}
    </li>
  )
}
