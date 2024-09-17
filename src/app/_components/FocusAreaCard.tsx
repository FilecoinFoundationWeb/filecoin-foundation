import type { LocalImageData } from '@/types/sharedProps/imageType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { Heading } from '@/components/Heading'
import { ImageWithFallback } from '@/components/ImageWithFallback'

export type FocusAreaCardProps = {
  title: string
  description: string
  image: LocalImageData
}

export function FocusAreaCard({
  title,
  description,
  image,
}: FocusAreaCardProps) {
  const { src, alt, height, width, blurDataURL } = image

  return (
    <li className="rounded-lg border border-brand-300 p-1 sm:flex lg:block">
      <ImageWithFallback
        src={src}
        alt={alt}
        height={height}
        width={width}
        blurDataURL={blurDataURL}
        className="aspect-video w-full rounded object-cover sm:w-60 sm:shrink-0 md:w-80 lg:w-full"
        sizes={buildImageSizeProp({
          startSize: '100vw',
          sm: '250px',
          md: '330px',
        })}
      />

      <div className="px-4 py-3 text-brand-100 sm:grow lg:px-3 lg:py-4">
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>

        <p className="mt-2">{description}</p>
      </div>
    </li>
  )
}
