import Image, { type StaticImageData } from 'next/image'

import {
  CTALink,
  type CTALinkProps,
} from '@filecoin-foundation/ui-filecoin/CTALink'
import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui-filecoin/Icon'

export type HEXCodeType = `#${string}`

export type ImageLogoProps = {
  type: 'image'
  src: StaticImageData
  bgColor: HEXCodeType
}

export type SVGLogoProps = {
  type: 'svg'
  src: IconProps['component']
  bgColor: HEXCodeType
}

export type SimpleCardWithLogoProps = {
  title: string
  description: string
  logo: ImageLogoProps | SVGLogoProps
  cta: {
    href: CTALinkProps['href']
    text: CTALinkProps['children']
  }
}

const LOGO_SIZE = 60

export function SimpleCardWithLogo({
  title,
  description,
  logo,
  cta,
}: SimpleCardWithLogoProps) {
  return (
    <li className="group focus-within:brand-outline relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border-base)] sm:flex-row">
      <div
        className="grid h-44 w-full shrink-0 place-items-center sm:h-full sm:w-42"
        style={{ backgroundColor: logo.bgColor }}
      >
        {logo.type === 'svg' ? (
          <span className="text-white">
            <Icon component={logo.src} size={LOGO_SIZE} />
          </span>
        ) : (
          <Image
            src={logo.src}
            alt={`${title}'s logo`}
            height={LOGO_SIZE}
            width={LOGO_SIZE}
          />
        )}
      </div>

      <hr
        aria-hidden="true"
        className="h-full border-t border-(--color-border-base) sm:border-t-0 sm:border-r"
      />

      <div className="relative h-full w-full group-focus-within:bg-(--color-card-background-hover) group-hover:bg-(--color-card-background-hover)">
        <div className="flex flex-col gap-6 p-8">
          <div className="mb-12 flex flex-col gap-3">
            <span className="group-focus-within:text-(--color-card-heading-hover) group-hover:text-(--color-card-heading-hover)">
              <Heading tag="h3" variant="card-heading">
                {title}
              </Heading>
            </span>
            <p className="text-(--color-paragraph-text)">{description}</p>
          </div>
        </div>
      </div>

      <CTALink inset href={cta.href} textClassName="bottom-8 sm:left-50 left-8">
        {cta.text}
      </CTALink>
    </li>
  )
}
