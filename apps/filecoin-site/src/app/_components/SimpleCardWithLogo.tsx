import type { ComponentType, SVGProps } from 'react'

import Image, { type StaticImageData } from 'next/image'

import { Icon } from '@filecoin-foundation/ui/Icon'

import { CTALink } from './CTALink'
import { SimpleCard, type SimpleCardProps } from './SimpleCard'

export type SimpleCardWithLogoProps = {
  title: SimpleCardProps['title']
  description: SimpleCardProps['description']
  cta: NonNullable<SimpleCardProps['cta']>
  logoBackgroundColor: `#${string}`
  logo: ComponentType<SVGProps<SVGSVGElement>> | StaticImageData
}

const LOGO_SIZE = 60

export function SimpleCardWithLogo({
  title,
  description,
  cta,
  logoBackgroundColor,
  logo: Logo,
}: SimpleCardWithLogoProps) {
  return (
    <li className="card-border-color relative flex h-full flex-col border sm:flex-row">
      <div
        className="grid h-44 w-full flex-shrink-0 place-items-center sm:h-full sm:w-42"
        style={{ backgroundColor: logoBackgroundColor }}
      >
        {'src' in Logo ? (
          <Image
            src={Logo}
            alt={`${title}'s logo`}
            height={LOGO_SIZE}
            width={LOGO_SIZE}
          />
        ) : (
          <Icon component={Logo} size={LOGO_SIZE} />
        )}
      </div>

      <div
        aria-hidden="true"
        className="card-border-color border-b sm:border-r sm:border-b-0"
      />

      <SimpleCard
        as="div"
        border="none"
        title={title}
        description={description}
      />

      <CTALink
        inset
        href={cta.href}
        aria-label={cta.text}
        textClassName="absolute bottom-6 sm:left-48 left-6"
      >
        {cta.text}
      </CTALink>
    </li>
  )
}
