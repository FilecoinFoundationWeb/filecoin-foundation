import Image from 'next/image'

import { Heading } from '@/components/Heading'

import { type StaticImageProps } from '@/types/sharedProps/imageType'

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
        src={image.src}
        alt={image.alt}
        className="aspect-video w-auto rounded object-cover sm:w-60 md:w-80 lg:w-auto"
        sizes="100vw, (min-width: 640px) 33vw"
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
