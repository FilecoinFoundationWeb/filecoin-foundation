import Image, { type StaticImageData } from 'next/image'

import {
  DescriptionText,
  type DescriptionProps,
} from '@filecoin-foundation/ui/DescriptionText'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'

import { Button } from '@/components/Button'
import { Kicker, type KickerProps } from '@/components/Kicker'

import { Title, type TitleProps } from './Title'

type PageHeaderProps = {
  title: TitleProps['children']
  kicker?: KickerProps['children']
  description?: DescriptionProps['children']
  backgroundImage?: StaticImageData
  imageOverlay?: boolean
  cta?: CTAProps
}

export function PageHeader({
  title,
  kicker,
  description,
  backgroundImage,
  imageOverlay = false,
  cta,
}: PageHeaderProps) {
  return (
    <header className="relative flex flex-col items-start gap-10 px-14 py-32">
      {backgroundImage && (
        <>
          <Image
            fill
            src={backgroundImage}
            className="-z-20 object-cover object-center"
            alt=""
          />
          {imageOverlay && (
            <div className="absolute inset-0 -z-10 bg-black/60" />
          )}
        </>
      )}
      <div className="flex flex-col items-start gap-10">
        <div className="flex max-w-2xl flex-col gap-6">
          {kicker && <Kicker size="md">{kicker}</Kicker>}
          <Title>{title}</Title>
          {description && <DescriptionText>{description}</DescriptionText>}
        </div>

        {cta && (
          <Button href={cta.href} aria-label={cta.ariaLabel}>
            {cta.text}
          </Button>
        )}
      </div>
    </header>
  )
}
