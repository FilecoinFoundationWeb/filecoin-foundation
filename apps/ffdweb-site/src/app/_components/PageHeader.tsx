import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import { Button } from '@filecoin-foundation/ui/Button'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'
import { clsx } from 'clsx'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

type TitleProps = {
  children: string
  fontVariant?: PageHeaderFontVariant
}

export type StaticImageProps = {
  data: StaticImageData
  alt: string
}

type PageHeaderImageProps = StaticImageProps

type PageHeaderFontVariant = 'default' | 'homepage'

type PageHeaderProps = {
  title: TitleProps['children']
  image: PageHeaderImageProps
  cta?: CTAProps
  mobileLayout?: 'content-above-image' | 'image-above-content'
  fontVariant?: PageHeaderFontVariant
}

export function PageHeader({
  title,
  image,
  cta,
  mobileLayout = 'content-above-image',
  fontVariant = 'default',
}: PageHeaderProps) {
  return (
    <header className="grid items-center gap-6 lg:grid-cols-2">
      <div
        className={clsx(
          'grid grid-cols-1 content-start justify-center gap-8 text-center',
          'sm:justify-items-center sm:gap-16 lg:order-1 lg:max-w-lg lg:justify-items-start lg:text-left',
          mobileLayout === 'image-above-content' ? 'order-2' : 'order-1',
        )}
      >
        <PageHeader.Title fontVariant={fontVariant}>{title}</PageHeader.Title>
        {cta && <PageHeader.CTAButton {...cta} />}
      </div>
      <div
        className={clsx(
          'flex justify-center lg:order-2 lg:justify-end',
          mobileLayout === 'image-above-content' ? 'order-1' : 'order-2',
        )}
      >
        {image && <PageHeader.Image image={image} />}
      </div>
    </header>
  )
}

PageHeader.Title = function Title({ children, fontVariant }: TitleProps) {
  const titleVariant = fontVariant === 'homepage' ? '5xl-fluid' : '4xl-fluid'

  return (
    <Heading tag="h1" variant={titleVariant}>
      {children}
    </Heading>
  )
}

PageHeader.Image = function PageHeaderImage({
  image,
}: Pick<PageHeaderProps, 'image'>) {
  const commonProps = {
    alt: image.alt,
    priority: true,
    quality: 100,
    sizes: buildImageSizeProp({ startSize: '384px', lg: '320px' }),
  }

  return (
    <Image
      {...commonProps}
      className="aspect-square h-auto w-full max-w-96 object-contain"
      src={image.data}
    />
  )
}

PageHeader.CTAButton = function CTAButton({ href, text, ariaLabel }: CTAProps) {
  return (
    <Button href={href} baseDomain={BASE_DOMAIN} aria-label={ariaLabel}>
      {text}
    </Button>
  )
}
