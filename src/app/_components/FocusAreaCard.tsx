import { Heading } from '@/components/Heading'
import { StaticImage, type StaticImageProps } from '@/components/StaticImage'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

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
      <StaticImage
        {...image}
        className="aspect-video w-full rounded object-cover sm:w-60 md:w-80 lg:w-full"
        sizes={buildImageSizeProp({
          startSize: '100vw',
          sm: '240px',
          md: '320px',
        })}
      />

      <div className="px-4 py-3 text-brand-100 lg:px-3 lg:py-4">
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>

        <p className="mt-2">{description}</p>
      </div>
    </li>
  )
}
