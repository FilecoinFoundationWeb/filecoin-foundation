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

type TitleProps = {
  children: string
}

type PageHeaderDescriptionProps = {
  text: string
  isClamped?: boolean
}

type PageHeaderImageProps = (StaticImageProps | ImageProps) & {
  objectFit?: ImageObjectFit
}

export type PageHeaderProps = {
  title: TitleProps['children']
  image: PageHeaderImageProps
  isFeatured?: boolean
  metaData?: MetaDataType
  description?: DescriptionTextType | PageHeaderDescriptionProps
  children?: React.ReactElement
}

export function PageHeader({
  title,
  image,
  metaData,
  isFeatured,
  description,
  children,
}: PageHeaderProps) {
  return (
    <header className="grid grid-cols-1 gap-4">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          {isFeatured && <TagLabel variant="secondary">Featured</TagLabel>}
          <PageHeader.Title>{title}</PageHeader.Title>
          {metaData && <Meta metaData={metaData} />}
          {description && <Description description={description} />}
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

function Description({
  description,
}: {
  description: PageHeaderProps['description']
}) {
  if (typeof description === 'string') {
    const text = description as DescriptionTextType
    return <DescriptionText>{text}</DescriptionText>
  }

  if (typeof description === 'object') {
    const { text, isClamped } = description as PageHeaderDescriptionProps

    return (
      <p className={clsx(isClamped && 'line-clamp-3 text-ellipsis')}>{text}</p>
    )
  }

  return null
}
