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
import { StaticImage, type StaticImageProps } from '@/components/StaticImage'

type PageSectionProps = {
  kicker: SectionDividerProps['title']
  title: string
  description?: DescriptionTextType
  image?: StaticImageProps
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
        className={clsx('mb-6 mt-4', {
          'grid grid-cols-1 gap-6 lg:grid-cols-2': image,
          'max-w-readable': !image,
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
