import Image, { type StaticImageData } from 'next/image'

import { clsx } from 'clsx'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import {
  type CTAButtonGroupProps,
  CTAButtonGroup,
} from '@/components/CTAButtonGroup'
import {
  DescriptionText,
  type DescriptionTextType,
} from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import {
  SectionDivider,
  type SectionDividerProps,
} from '@/components/SectionDivider'

type PageSectionImageProps = {
  data: StaticImageData
  alt: string
}

type PageSectionProps = {
  kicker: SectionDividerProps['title']
  title: string
  description?: DescriptionTextType
  image?: PageSectionImageProps
  cta?: CTAButtonGroupProps['cta']
  children?: React.ReactNode
}

export function PageSection({
  kicker,
  title,
  description,
  image,
  children,
  cta,
}: PageSectionProps) {
  return (
    <section>
      <SectionDivider title={kicker} />
      <div
        className={clsx('mt-4', {
          'grid grid-cols-1 gap-6 lg:grid-cols-2': image,
          'max-w-readable': !image,
          'mb-6': children,
        })}
      >
        <div className="space-y-4">
          <Heading tag="h2" variant="3xl">
            {title}
          </Heading>
          {description && <DescriptionText>{description}</DescriptionText>}
          {cta && <CTAButtonGroup cta={cta} />}
        </div>
        {image && (
          <Image
            src={image.data}
            alt={image.alt}
            sizes={buildImageSizeProp({ startSize: '100vw', lg: '480px' })}
            className="aspect-video h-full w-full rounded-lg object-cover lg:aspect-auto"
          />
        )}
      </div>
      {children && <div className="flex flex-col gap-6">{children}</div>}
    </section>
  )
}
