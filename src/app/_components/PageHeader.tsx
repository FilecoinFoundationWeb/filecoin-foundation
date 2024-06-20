import clsx from 'clsx'

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
  const isDynamicImage = 'src' in image
  const isStaticImage = 'data' in image

  if (isStaticImage) {
    return (
      <StaticImage
        {...image}
        priority
        quality={100}
        className={clsx(aspectRatioStyle, borderStyle)}
        sizes={imageSizes}
      />
    )
  }

  if (isDynamicImage) {
    return (
      <div className={clsx('relative', aspectRatioStyle)}>
        <DynamicImage
          {...image}
          fill
          priority
          quality={100}
          className={clsx('h-full w-full', borderStyle)}
          sizes={imageSizes}
          fallback={image.fallback}
        />
      </div>
    )
  }
}

export function PageHeader({
  title,
  description,
  cta,
  image,
  metaData,
  isFeatured = false,
}: PageHeaderProps) {
  const mainCTA = Array.isArray(cta) ? cta[0] : cta
  const secondaryCTA = Array.isArray(cta) ? cta[1] : undefined

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

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 lg:flex-col lg:gap-4">
            {mainCTA && (
              <Button href={mainCTA.href} variant="primary" className="flex-1">
                {mainCTA.text}
              </Button>
            )}

            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="ghost"
                className="flex-1"
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>

        <div className="lg:w-1/2">
          <PageHeaderImage image={image} />
        </div>
      </div>
    </header>
  )
}

PageHeader.Title = Title
