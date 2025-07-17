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
      width="auto"
      aria-label={href ? undefined : alt}
      aria-hidden={href ? 'true' : undefined}
      className="max-w-full text-zinc-400"
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
