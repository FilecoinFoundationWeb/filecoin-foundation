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
      className="max-w-full text-(--color-logo-item) group-focus-within:text-(--color-logo-item-hover) group-hover:text-(--color-logo-item-hover)"
    />
  )

  return (
    <>
      {href ? (
        <a
          href={href}
          aria-label={`Visit ${alt} website`}
          className="focus:brand-outline group"
        >
          {logoElement}
        </a>
      ) : (
        logoElement
      )}
    </>
  )
}
