import { clsx } from 'clsx'

import { Button } from '@/components/Button'
import {
  DescriptionText,
  type DescriptionTextType,
} from '@/components/DescriptionText'
import { DynamicImage, type DynamicImageProps } from '@/components/DynamicImage'
import { Heading } from '@/components/Heading'
import { Meta, type MetaDataType } from '@/components/Meta'
import { SectionDivider } from '@/components/SectionDivider'
import { StaticImage, type StaticImageProps } from '@/components/StaticImage'

import { type CTAProps } from '@/types/sharedProps/ctaType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

type TitleProps = {
  children: string
}

type PageHeaderProps = {
  title: TitleProps['children']
  description?: DescriptionTextType
  cta?: CTAProps | [CTAProps, CTAProps]
  metaData?: MetaDataType
  isFeatured?: boolean
  image: StaticImageProps | DynamicImageProps
}

function Title({ children }: TitleProps) {
  return (
    <Heading tag="h1" variant="4xl">
      {children}
    </Heading>
  )
}

const aspectRatioStyle = 'aspect-video'
const borderStyle = 'rounded-lg border border-brand-100'
const imageSizes = buildImageSizeProp({ startSize: '100vw', lg: '490px' })

function PageHeaderImage({ image }: Pick<PageHeaderProps, 'image'>) {
  if (!image) return null

  const isDynamicImage = 'src' in image
  const isStaticImage = 'data' in image

  if (!isDynamicImage && !isStaticImage) return null

  const commonProps = {
    priority: true,
    quality: 100,
    sizes: imageSizes,
    className: clsx(aspectRatioStyle, borderStyle),
  }

  const renderImage = (ImageComponent: React.ElementType) => (
    <div className={clsx('relative', aspectRatioStyle)}>
      <ImageComponent
        {...image}
        fill={isDynamicImage}
        {...commonProps}
        className={clsx('h-full w-full', borderStyle)}
      />
    </div>
  )

  return isDynamicImage ? renderImage(DynamicImage) : renderImage(StaticImage)
}

export function PageHeader({
  title,
  description,
  cta,
  image,
  metaData,
  isFeatured = false,
}: PageHeaderProps) {
  const ctaArray = Array.isArray(cta) ? cta : [cta]

  return (
    <header className="grid gap-4">
      {isFeatured && <SectionDivider title="Featured" />}
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <Title>{title}</Title>

          {metaData && (
            <span className="mb-2">
              <Meta metaData={metaData} />
            </span>
          )}

          {description && <DescriptionText>{description}</DescriptionText>}

          {ctaArray && (
            <div
              className={clsx(
                'grid gap-4',
                ctaArray.length === 1
                  ? 'lg:grid-cols-1'
                  : 'sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 lg:gap-4',
              )}
            >
              {ctaArray.map(
                (button, index) =>
                  button && (
                    <Button
                      key={index}
                      href={button.href}
                      variant={index === 0 ? 'primary' : 'ghost'}
                    >
                      {button.text}
                    </Button>
                  ),
              )}
            </div>
          )}
        </div>

        <div className="lg:w-1/2">
          <PageHeaderImage image={image} />
        </div>
      </div>
    </header>
  )
}

PageHeader.Title = Title
