import Image from 'next/image'

import clsx from 'clsx'

import { Button } from '@/components/Button'
import {
  type DescriptionTextType,
  DescriptionText,
} from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import { Meta } from '@/components/Meta'
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
  metaData?: Array<string | null | undefined>
  isFeatured?: boolean
}

type RemoteImageProps = Partial<ImageProps> & {
  objectFit?: 'contain' | 'cover'
  fallback: StaticImageProps
}

type PageHeaderProps = SharedProps & {
  image?:
    | ({ type: 'local' } & StaticImageProps)
    | ({ type: 'remote' } & RemoteImageProps)
}

const imageContainerStyle = 'aspect-video lg:aspect-auto lg:w-1/2'

function StaticImage({ alt, src }: StaticImageProps) {
  return (
    <div className={imageContainerStyle}>
      <Image
        priority
        src={src}
        alt={alt}
        placeholder="blur"
        quality={100}
        className="h-full w-full rounded-lg border border-brand-100 object-cover"
      />
    </div>
  )
}

function RemoteImage({
  url,
  alt,
  objectFit = 'cover',
  fallback,
  ...rest
}: RemoteImageProps) {
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
  const firstCTA = Array.isArray(cta) ? cta[0] : cta
  const secondCTA = Array.isArray(cta) && cta[1]

  return (
    <header className="grid grid-rows-[auto,auto] gap-4">
      {isFeatured && <SectionDivider title="Featured" />}
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-4 md:w-1/2">
          <Title>{title}</Title>

          {metaData && metaData.length > 0 && (
            <span className="mb-2">
              <Meta metaData={metaData} />
            </span>
          )}

          <DescriptionText>{description}</DescriptionText>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 lg:flex-col lg:gap-4">
            <Button href={firstCTA.href} variant="primary" className="flex-1">
              {firstCTA.text}
            </Button>

            {secondCTA && (
              <Button href={secondCTA.href} variant="ghost" className="flex-1">
                {secondCTA.text}
              </Button>
            )}
          </div>
        </div>

        {image?.type === 'local' && <StaticImage {...image} />}
        {image?.type === 'remote' && <RemoteImage {...image} />}
      </div>
    </header>
  )
}

PageHeader.Title = Title
