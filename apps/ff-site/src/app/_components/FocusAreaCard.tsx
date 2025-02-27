import Image from 'next/image'

import { Heading } from '@filecoin-foundation/ui/Heading'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

export type FocusAreaCardProps = {
  title: string
  description: string
  image: StaticImageProps
}

export function FocusAreaCard({
  title,
  description,
  image,
}: FocusAreaCardProps) {
  return (
    <li className="rounded-lg border border-brand-300 p-1 sm:flex lg:block">
      <Image
        src={image.data}
        alt={image.alt}
        className="aspect-video w-full rounded-sm object-cover sm:w-60 sm:shrink-0 md:w-80 lg:w-full"
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
