import Image from 'next/image'

import { Heading } from '@/components/Heading'
import { SectionDivider } from '@/components/SectionDivider'

import { ImageProps } from '@/types/sharedProps/imageType'

import setDescriptionParagraph from '@/utils/setDescriptionParagraph'

type PageSectionProps = {
  kicker: string
  title: string
  description?: string | string[]
  children?: React.ReactNode
  image?: ImageProps
}

export function PageSection({
  kicker,
  title,
  description,
  image,
  children,
}: PageSectionProps) {
  return (
    <section>
      <SectionDivider title={kicker} />
      <div
        className={`${image ? 'grid grid-cols-1 gap-6 sm:grid-cols-2' : 'mb-6 max-w-[60ch]'}`}
      >
        <div className="space-y-6">
          <Heading tag="h2" variant="3xl">
            {title}
          </Heading>
          {description && setDescriptionParagraph(description)}
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
      {children && <div className="flex flex-col gap-6">{children}</div>}
    </section>
  )
}
