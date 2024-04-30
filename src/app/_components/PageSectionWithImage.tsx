import Image from 'next/image'

import { Heading } from '@/components/Heading'
import { SectionDivider } from '@/components/SectionDivider'

import setDescriptionParagraph from '@/utils/setDescriptionParagraph'

import { ImageProps } from './PageHeader'

type PageSectionWithImageProps = {
  kicker: string
  title: string
  description: string | string[]
  image?: ImageProps
}

export function PageSectionWithImage({
  kicker,
  title,
  description,
  image,
}: PageSectionWithImageProps) {
  return (
    <section>
      <SectionDivider title={kicker} />
      <div
        className={`${image ? 'grid grid-cols-1 gap-6 sm:grid-cols-2' : 'max-w-[60ch]'}`}
      >
        <div className="space-y-6">
          <Heading tag="h2" variant="3xl">
            {title}
          </Heading>
          {setDescriptionParagraph(description)}
        </div>
        {image && (
          <div className="relative h-72 w-full sm:h-full">
            <Image
              fill
              src={image.url}
              alt={image.alt}
              className="block rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}
