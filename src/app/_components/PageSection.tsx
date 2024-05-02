import Image from 'next/image'

import {
  type DescriptionTextType,
  DescriptionText,
} from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import { SectionDivider } from '@/components/SectionDivider'

import { ImageProps } from '@/types/sharedProps/imageType'

type PageSectionProps = {
  kicker: string
  title: string
  description?: DescriptionTextType
  image?: ImageProps
  children?: React.ReactNode
}

const containerClasses = (hasImage: Boolean) => {
  return hasImage
    ? 'grid grid-cols-1 gap-6 sm:grid-cols-2'
    : 'mb-6 max-w-[60ch]'
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
      <div className={containerClasses(!!image)}>
        <div className="space-y-6">
          <Heading tag="h2" variant="3xl">
            {title}
          </Heading>
          {description && <DescriptionText>{description}</DescriptionText>}
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
