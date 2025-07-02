import Image from 'next/image'

type Logo = {
  src: string
  alt: string
  height?: number
  width?: number
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
        {logos.map((logoProps) => {
          const { alt, href } = logoProps
          return (
            <li key={alt} className="flex items-center">  
              {href ? (
                <a
                  href={href}
                  aria-label={`Visit ${alt} website`}
                  className="rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                >
                  <Logo {...logoProps} />
                </a>
              ) : (
                <Logo {...logoProps} />
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function Logo({ src, alt, height, width }: Logo) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 120}
      height={height || 40}
      className="object-contain"
    />
  )
}
