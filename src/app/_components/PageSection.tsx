import clsx from 'clsx'

import {
  type DescriptionTextType,
  DescriptionText,
} from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import {
  SectionDivider,
  type SectionDividerProps,
} from '@/components/SectionDivider'
import { StaticImage, type StaticImageProps } from '@/components/StaticImage'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

type PageSectionProps = {
  kicker: SectionDividerProps['title']
  title: string
  description?: DescriptionTextType
  image?: StaticImageProps
  children?: React.ReactNode
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
        className={clsx(
          'mb-6 mt-4',
          image ? 'grid grid-cols-1 gap-6 lg:grid-cols-2' : 'max-w-readable',
        )}
      >
        <div className="space-y-4">
          <Heading tag="h2" variant="3xl">
            {title}
          </Heading>
          {description && <DescriptionText>{description}</DescriptionText>}
        </div>
        {image && (
          <div className="relative aspect-video lg:aspect-auto">
            <StaticImage
              {...image}
              fill
              className="rounded-lg"
              sizes={buildImageSizeProp({ startSize: '100vw', lg: '480px' })}
            />
          </div>
        )}
      </div>
      {children && <div className="flex flex-col gap-6">{children}</div>}
    </section>
  )
}
