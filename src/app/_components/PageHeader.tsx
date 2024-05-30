import Image from 'next/image'

import clsx from 'clsx'

import { Button } from '@/components/Button'
import {
  type DescriptionTextType,
  DescriptionText,
} from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import { Meta, type MetaDataType } from '@/components/Meta'
import { NextStaticImage } from '@/components/NextStaticImage'
import { SectionDivider } from '@/components/SectionDivider'

import { type CTAProps } from '@/types/sharedProps/ctaType'
import {
  type StaticImageProps,
  type ImageProps,
} from '@/types/sharedProps/imageType'

type TitleProps = {
  children: string
}

type SharedProps = {
  title: TitleProps['children']
  description: DescriptionTextType
  cta: CTAProps | [CTAProps, CTAProps?]
  metaData?: MetaDataType
  isFeatured?: boolean
}

type DynamicImageProps = Partial<ImageProps> & {
  fallback: StaticImageProps
  objectFit?: 'contain' | 'cover'
}

type PageHeaderProps = SharedProps & {
  image:
    | ({ type: 'static' } & StaticImageProps)
    | ({ type: 'dynamic' } & DynamicImageProps)
}

const imageContainerStyle = 'aspect-video lg:aspect-auto lg:w-1/2'

function StaticImage({ data, alt }: StaticImageProps) {
  return (
    <div className={imageContainerStyle}>
      <NextStaticImage
        priority
        data={data}
        alt={alt}
        quality={100}
        className="h-full w-full rounded-lg border border-brand-100 object-cover"
      />
    </div>
  )
}

function DynamicImage({
  url,
  alt,
  objectFit = 'cover',
  fallback,
  ...rest
}: DynamicImageProps) {
  if (!url) {
    return <StaticImage {...fallback} />
  }

  return (
    <div className={clsx('relative', imageContainerStyle)}>
      <Image
        fill
        priority
        src={url}
        alt={alt || 'Missing alt description'}
        quality={100}
        sizes="100vw, (min-width: 1024px) 50vw"
        className={clsx(
          'h-full w-full rounded-lg border border-brand-100',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
        )}
        {...rest}
      />
    </div>
  )
}

function Title({ children }: TitleProps) {
  return (
    <Heading tag="h1" variant="4xl">
      {children}
    </Heading>
  )
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
    <header className="grid grid-rows-[auto,auto] gap-4">
      {isFeatured && <SectionDivider title="Featured" />}
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-4 md:w-1/2">
          <Title>{title}</Title>

          {metaData && (
            <span className="mb-2">
              <Meta metaData={metaData} />
            </span>
          )}

          <DescriptionText>{description}</DescriptionText>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 lg:flex-col lg:gap-4">
            <Button href={mainCTA.href} variant="primary" className="flex-1">
              {mainCTA.text}
            </Button>

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

        {image.type === 'static' && <StaticImage {...image} />}
        {image.type === 'dynamic' && <DynamicImage {...image} />}
      </div>
    </header>
  )
}

PageHeader.Title = Title
