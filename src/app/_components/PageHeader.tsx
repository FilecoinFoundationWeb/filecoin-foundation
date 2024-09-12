import Image from 'next/image'

import { clsx } from 'clsx'

import type { DynamicImageData } from '@/types/sharedProps/imageType'

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

type PageHeaderProps = {
  title: TitleProps['children']
  image: DynamicImageData
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

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <PageHeader.Title>{title}</PageHeader.Title>

          {metaData && (
            <span className="mb-2">
              <Meta metaData={metaData} />
            </span>
          )}

          {description && <DescriptionText>{description}</DescriptionText>}
          {cta && <CTAButtonGroup cta={cta} />}
        </div>

        <div className="lg:w-1/2">
          <PageHeader.Image image={image} />
        </div>
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
  if (!image) return null

  const { src, alt, ...restImageProps } = image

  const layoutProps = {
    priority: true,
    quality: 100,
    sizes: buildImageSizeProp({ startSize: '100vw', lg: '490px' }),
    className: clsx('h-full w-full', 'rounded-lg border border-brand-100'),
  }

  return (
    <div className={clsx('relative', 'aspect-video')}>
      <Image
        fill
        src={src}
        alt={alt || ''}
        {...layoutProps}
        {...restImageProps}
      />
    </div>
  )
}
