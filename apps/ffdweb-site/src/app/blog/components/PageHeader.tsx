import Image, { type ImageProps } from 'next/image'

import { Button } from '@filecoin-foundation/ui/Button'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents/TagLabel'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'
import type { ImageObjectFit } from '@filecoin-foundation/utils/types/imageType'
import { clsx } from 'clsx'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

type TitleProps = {
  children: string
}

type PageHeaderImageProps = ImageProps & {
  objectFit?: Extract<ImageObjectFit['objectFit'], 'cover'>
}

type PageHeaderProps = {
  title: TitleProps['children']
  image: PageHeaderImageProps
  description?: string
  metaData?: string[]
  kicker?: string
  cta?: CTAProps
}

export function PageHeader({
  title,
  image,
  description,
  metaData,
  kicker,
  cta,
}: PageHeaderProps) {
  const { href, text, ariaLabel } = cta || {}

  return (
    <header className="grid gap-6 lg:grid-cols-2">
      <div className="grid grid-cols-1 gap-6">
        <div>{kicker && <TagLabel variant="secondary">{kicker}</TagLabel>}</div>
        <Heading tag="h1" variant="4xl-fluid">
          {title}
        </Heading>
        {metaData && <p className="text-sm text-neutral-200">{metaData}</p>}
        {description && <p>{description}</p>}
        {cta && (
          <Button
            href={href}
            baseDomain={BASE_DOMAIN}
            aria-label={ariaLabel}
            className="h-fit w-full self-end sm:w-fit"
          >
            {text}
          </Button>
        )}
      </div>
      <div className="relative aspect-video h-full w-full">
        <Image
          fill
          priority
          src={image?.src || graphicsData.imageFallback.data.src}
          alt={image?.alt || ''}
          sizes={buildImageSizeProp({ startSize: '384px', lg: '320px' })}
          className={clsx(image.objectFit === 'cover' && 'object-cover')}
        />
      </div>
    </header>
  )
}
