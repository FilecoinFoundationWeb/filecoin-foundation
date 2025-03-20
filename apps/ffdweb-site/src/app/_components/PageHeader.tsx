import Image, { type ImageProps } from 'next/image'

import { Button } from '@filecoin-foundation/ui/Button'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'
import type {
  ImageObjectFit,
  StaticImageProps,
} from '@filecoin-foundation/utils/types/imageType'
import { clsx } from 'clsx'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Kicker } from '@/components/Kicker'

type TitleProps = {
  children: string
  isHomepage?: PageHeaderProps['isHomepage']
}

type PageHeaderImageProps = (StaticImageProps | ImageProps) & {
  objectFit?: ImageObjectFit
}

type PageHeaderProps = {
  title: TitleProps['children']
  image: PageHeaderImageProps
  kicker?: string
  cta?: CTAProps
  isHomepage?: boolean
}

export function PageHeader({
  title,
  image,
  kicker,
  cta,
  isHomepage = false,
}: PageHeaderProps) {
  return (
    <header className="grid items-center gap-16 lg:grid-cols-2">
      <div
        className={clsx(
          'grid grid-cols-1 content-start justify-center gap-8 text-center',
          'sm:justify-items-center sm:gap-16 lg:order-1 lg:max-w-lg lg:justify-items-start lg:text-left',
          isHomepage ? 'order-2' : 'order-1',
        )}
      >
        <div className="flex flex-col gap-8">
          {kicker && <Kicker as="div">{kicker}</Kicker>}
          <PageHeader.Title isHomepage={isHomepage}>{title}</PageHeader.Title>
        </div>

        {cta && <PageHeader.CTAButton {...cta} />}
      </div>

      <div
        className={clsx(
          'flex justify-center lg:order-2 lg:justify-end',
          isHomepage ? 'order-1' : 'order-2',
        )}
      >
        {image && <PageHeader.Image image={image} />}
      </div>
    </header>
  )
}

PageHeader.Title = function Title({
  children,
  isHomepage = false,
}: TitleProps) {
  const titleVariant = isHomepage ? '5xl-fluid' : '4xl-fluid'

  return (
    <Heading tag="h1" variant={titleVariant}>
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
    sizes: buildImageSizeProp({
      startSize: '90vw',
      sm: '340px',
      lg: '384px',
    }),
  }

  if (isStaticImage) {
    return (
      <Image
        {...commonProps}
        className="aspect-square h-auto w-full max-w-96 object-contain"
        src={image.data}
      />
    )
  }

  return (
    <div className="relative aspect-video">
      <Image
        fill
        {...commonProps}
        className="h-full w-full"
        src={image.src}
        alt={commonProps.alt}
      />
    </div>
  )
}

PageHeader.CTAButton = function CTAButton({ href, text, ariaLabel }: CTAProps) {
  return (
    <Button href={href} baseDomain={BASE_DOMAIN} aria-label={ariaLabel}>
      {text}
    </Button>
  )
}
