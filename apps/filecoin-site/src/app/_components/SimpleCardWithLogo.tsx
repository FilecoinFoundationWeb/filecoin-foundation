import type { ComponentType, SVGProps } from 'react'

import Image, { type StaticImageData } from 'next/image'

import { Icon } from '@filecoin-foundation/ui/Icon'

import { CTALink } from './CTALink'
import { SimpleCard, type SimpleCardProps } from './SimpleCard'

type HEXCodeType = `#${string}`

type ImageLogoProps = {
  type: 'image'
  src: StaticImageData
  bgColor: HEXCodeType
}

type SVGLogoProps = {
  type: 'svg'
  src: ComponentType<SVGProps<SVGSVGElement>>
  bgColor: HEXCodeType
  color: HEXCodeType
}

export type SimpleCardWithLogoProps = {
  title: SimpleCardProps['title']
  description: SimpleCardProps['description']
  cta: NonNullable<SimpleCardProps['cta']>
  logo: ImageLogoProps | SVGLogoProps
}

type LogoProps = {
  logo: SimpleCardWithLogoProps['logo']
  title: SimpleCardWithLogoProps['title']
}

const LOGO_SIZE = 60

export function SimpleCardWithLogo({
  title,
  description,
  cta,
  logo,
}: SimpleCardWithLogoProps) {
  return (
    <li
      data-card-type="simple-with-logo"
      className="group relative flex h-full flex-col rounded-xs border border-[var(--color-border-base)] sm:flex-row"
    >
      <Logo logo={logo} title={title} />

      <Divider />

      <SimpleCard
        as="div"
        border="none"
        title={title}
        description={description}
      />

      <CTALink
        inset
        href={cta.href}
        textClassName="absolute bottom-6 sm:left-48 left-6"
      >
        {cta.text}
      </CTALink>
    </li>
  )
}

function Logo({ logo, title }: LogoProps) {
  return (
    <div
      className="grid h-44 w-full flex-shrink-0 place-items-center sm:h-full sm:w-42"
      style={{ backgroundColor: logo.bgColor }}
    >
      {logo.type === 'svg' ? (
        <span style={{ color: logo.color }}>
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
  )
}

function Divider() {
  return (
    <hr
      aria-hidden="true"
      className="h-full border-t border-[var(--color-border-base)] sm:border-t-0 sm:border-r"
    />
  )
}
