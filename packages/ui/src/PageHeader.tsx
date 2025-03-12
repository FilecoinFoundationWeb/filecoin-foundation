import Image, { type ImageProps } from 'next/image'

import {
  DescriptionText,
  type DescriptionTextType,
} from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { Meta, type MetaDataType } from '@filecoin-foundation/ui/Meta'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type {
  ImageObjectFit,
  StaticImageProps,
} from '@filecoin-foundation/utils/types/imageType'
import { clsx } from 'clsx'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'
import { SectionDivider } from '@filecoin-foundation/ui/SectionDivider'

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
  sectionDividerText?: string
  metaData?: MetaDataType
  description?: DescriptionTextType
  children?: React.ReactElement
}

export function PageHeader({
  title,
  image,
  metaData,
  isFeatured,
  sectionDividerText,
  description,
  children,
}: PageHeaderProps) {
  return (
    <header className="grid grid-cols-1 gap-4">
      {sectionDividerText && <SectionDivider title={sectionDividerText} />}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          {isFeatured && <TagLabel variant="secondary">Featured</TagLabel>}
          <PageHeader.Title>{title}</PageHeader.Title>
          {metaData && <Meta metaData={metaData} />}
          {description && <DescriptionText>{description}</DescriptionText>}
          {children}
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
      'page-header-image',
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
      <Image fill {...commonProps} src={image.src} />
    </div>
  )
}
