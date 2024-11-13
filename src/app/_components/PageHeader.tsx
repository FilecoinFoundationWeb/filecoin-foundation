import Image, { type ImageProps } from 'next/image'

import { clsx } from 'clsx'

import type { ImageObjectFit, StaticImageProps } from '@/types/imageType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import {
  type CTAButtonGroupProps,
  CTAButtonGroup,
} from '@/components/CTAButtonGroup'
import {
  DescriptionText,
  type DescriptionTextType,
} from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import { Meta, type MetaDataType } from '@/components/Meta'
import { SectionDivider } from '@/components/SectionDivider'

type TitleProps = {
  children: string
}

type PageHeaderImageProps = (StaticImageProps | ImageProps) & {
  objectFit?: ImageObjectFit
}

type PageHeaderProps = {
  title: TitleProps['children']
  image: PageHeaderImageProps
  isFeatured?: boolean
  metaData?: MetaDataType
  description?: DescriptionTextType
  cta?: CTAButtonGroupProps['cta']
}

export function PageHeader({
  title,
  image,
  isFeatured = false,
  metaData,
  description,
  cta,
}: PageHeaderProps) {
  return (
    <header className="grid gap-4">
      {isFeatured && <SectionDivider title="Featured" />}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <PageHeader.Title>{title}</PageHeader.Title>
          {metaData && (
            <span className="mb-2">
              <Meta metaData={metaData} />
            </span>
          )}
          {description && <DescriptionText>{description}</DescriptionText>}
          {cta && <CTAButtonGroup cta={cta} />}
        </div>
        {image && <PageHeader.Image image={image} />}
      </div>
    </header>
  )
}

PageHeader.Title = function Title({ children }: TitleProps) {
  return (
    <Heading tag="h1" variant="4xl">
      {children}
    </Heading>
  )
}

PageHeader.Image = function PageHeaderImage({
  image,
}: Pick<PageHeaderProps, 'image'>) {
  const isStaticImage = 'data' in image

  const commonProps = {
    alt: image.alt,
    priority: true,
    quality: 100,
    sizes: buildImageSizeProp({ startSize: '100vw', lg: '490px' }),
    className: clsx(
      'rounded-lg border border-brand-100',
      image.objectFit === 'cover' && 'object-cover',
      image.objectFit === 'contain' && 'object-contain',
    ),
  }

  if (isStaticImage) {
    return (
      <Image
        {...commonProps}
        className={clsx(commonProps.className, 'aspect-video')}
        src={image.data}
        alt={commonProps.alt}
      />
    )
  }

  return (
    <div className="relative aspect-video">
      <Image
        fill
        {...commonProps}
        className={clsx(commonProps.className, 'h-full w-full')}
        src={image.src}
        alt={commonProps.alt}
      />
    </div>
  )
}
