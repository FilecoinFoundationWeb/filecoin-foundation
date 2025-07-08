import Image, { type StaticImageData } from 'next/image'

import { Button, type ButtonProps } from '@/components/Button'
import { Kicker, type KickerProps } from '@/components/Kicker'

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
  description?: DescriptionProps['children']
  backgroundVariant?: BackgroundVariant
  backgroundImage?: StaticImageData
  kicker?: KickerProps['children']
  cta?: CTAProps
}

export function PageHeader({
  title,
  description,
  backgroundImage,
  kicker,
  cta,
  backgroundVariant = 'light',
}: PageHeaderProps) {
  return (
    <header className="relative flex flex-col items-start gap-10 py-32">
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
        <div className="flex max-w-2xl flex-col gap-6">
          {kicker && (
            <Kicker size="md" backgroundVariant={backgroundVariant}>
              {kicker}
            </Kicker>
          )}
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
