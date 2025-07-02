import type { ComponentType, SVGProps } from 'react'

type Logo = {
  logo: ComponentType<SVGProps<SVGSVGElement>>
  alt: string
  height?: number
  href?: string
}

type LogoSectionProps = {
  logos: Array<Logo>
  title?: string
}
export function LogoSection({ logos, title }: LogoSectionProps) {
  return (
    <section aria-labelledby="logo-section-title">
      {title && (
        <h2 id="logo-section-title" className="sr-only">
          {title}
        </h2>
      )}
      <ul className="flex flex-wrap justify-start gap-x-16 gap-y-10">
        {logos.map(({ logo: SvgComponent, alt, height, href }: Logo, index) => {
          const logoElement = (
            <SvgComponent height={height || 40} aria-label={alt} />
          )
          return (
            <li key={index} className="flex items-center">
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
        })}
      </ul>
    </section>
  )
}
