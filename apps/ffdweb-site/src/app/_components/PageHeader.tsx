import Image from 'next/image'
import type { StaticImageData } from 'next/image'

import { Button } from '@filecoin-foundation/ui/Button'
import {
  DescriptionText,
  type DescriptionTextType,
} from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

type TitleProps = {
  children: string
}

export type ImageObjectFit = {
  objectFit?: 'contain' | 'cover'
}

export type StaticImageProps = {
  data: StaticImageData
  alt: string
}

type CTAButtonProps = {
  cta: CTAProps
}

type PageHeaderProps = {
  title: TitleProps['children']
  isFeatured?: boolean
  description?: DescriptionTextType
  image: StaticImageProps
  cta?: CTAButtonProps
}

export function PageHeader({ title, image, cta }: PageHeaderProps) {
  return (
    <header className="grid gap-16 lg:grid-cols-2">
      <div className="flex items-center justify-center lg:max-w-xl lg:justify-start">
        <PageHeader.Title>{title}</PageHeader.Title>
      </div>
      <div className="flex justify-center lg:justify-end">
        {image && <PageHeader.Image image={image} />}
        {cta && <PageHeader.CTAButton cta={cta.cta} />}
      </div>
    </header>
  )
}

PageHeader.Title = function Title({ children }: TitleProps) {
  return (
    <Heading tag="h1" variant="4xl-fluid">
      {children}
    </Heading>
  )
}

PageHeader.Image = function PageHeaderImage({
  image,
}: Pick<PageHeaderProps, 'image'>) {
  const commonProps = {
    alt: image.alt,
    width: 360,
    height: 360,
    priority: true,
    quality: 100,
    sizes: buildImageSizeProp({ startSize: '100vw', lg: '360px' }),
  }

  return (
    <Image
      {...commonProps}
      className="aspect-square h-auto w-full max-w-[360px] object-contain"
      src={image.data}
      alt={commonProps.alt}
    />
  )
}

PageHeader.CTAButton = function CTAButton({ cta }: CTAButtonProps) {
  return (
    <Button href={cta.href} baseDomain={BASE_DOMAIN}>
      {cta.text}
    </Button>
  )
}
