import Image from 'next/image'

import type { StaticImageDataWithAlt } from '@/types/sharedProps/imageType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { Heading } from '@/components/Heading'

export type FocusAreaCardProps = {
  title: string
  description: string
  image: StaticImageDataWithAlt
}

export function FocusAreaCard({
  title,
  description,
  image,
}: FocusAreaCardProps) {
  const { alt, ...restImageProps } = image
  return (
    <li className="rounded-lg border border-brand-300 p-1 sm:flex lg:block">
      <Image
        alt={alt}
        className="aspect-video w-full rounded object-cover sm:w-60 sm:shrink-0 md:w-80 lg:w-full"
        {...restImageProps}
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
