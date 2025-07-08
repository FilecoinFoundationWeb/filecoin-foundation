import Image, { type StaticImageData } from 'next/image'

import { Button, type ButtonProps } from '@/components/Button'
import { Kicker } from '@/components/Kicker'

import type { BackgroundVariant } from '@/styles/theme'

import { Description, type DescriptionProps } from './Description'
import { Title, type TitleProps } from './Title'

type CTAProps = {
  href: string
  variant: ButtonProps['variant']
  ariaLabel: string
  text: string
}

type PageHeaderProps = {
  title: TitleProps['children']
  description: DescriptionProps['children']
  backgroundVariant: BackgroundVariant
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
          <Button
            href={cta.href}
            variant={cta.variant}
            aria-label={cta.ariaLabel}
          >
            {cta.text}
          </Button>
        )}
      </div>
    </header>
  )
}
