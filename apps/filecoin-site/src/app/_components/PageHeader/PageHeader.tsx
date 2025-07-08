import Image, { type StaticImageData } from 'next/image'

import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'

import { Button } from '@/components/Button'
import { Kicker } from '@/components/Kicker'

import { Description, type DescriptionProps } from './Description'
import { Title, type TitleProps } from './Title'

type PageHeaderProps = {
  title: TitleProps['children']
  description: DescriptionProps['children']
  backgroundVariant: 'light' | 'dark'
  backgroundImage?: StaticImageData
  kicker?: string
  cta?: CTAProps
}

export function PageHeader({
  title,
  description,
  backgroundImage,
  kicker,
  cta,
  backgroundVariant,
}: PageHeaderProps) {
  return (
    <header className="relative flex flex-col items-start gap-10 px-32 py-44">
      {backgroundImage && (
        <>
          <Image
            fill
            src={backgroundImage}
            className="-z-20 object-cover"
            alt=""
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />
        </>
      )}
      <div>
        <div className="flex flex-col gap-6">
          {kicker && <Kicker size="md">{kicker}</Kicker>}
          <Title backgroundVariant={backgroundVariant}>{title}</Title>
          {description && (
            <Description backgroundVariant={backgroundVariant}>
              {description}
            </Description>
          )}
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
