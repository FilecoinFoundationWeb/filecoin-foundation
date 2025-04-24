import Image from 'next/image'

import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'
import { clsx } from 'clsx'

import { graphicsData } from '@/data/graphicsData'

import { PageSection, type PageSectionProps } from '@/components/PageSection'

import { CTALink, type CTALinkProps } from './CTALink'

type PageSectionWithImageProps = PageSectionProps & {
  image: StaticImageProps
  cta: CTALinkProps
  layout?: 'regular' | 'reversed'
}

export function PageSectionWithImage({
  kicker,
  title,
  description,
  image,
  cta,
  layout = 'regular',
}: PageSectionWithImageProps) {
  return (
    <section className="grid grid-cols-1 gap-20 lg:grid-cols-2">
      <PageSection
        as="div"
        kicker={kicker}
        title={title}
        description={description}
      >
        <CTALink {...cta} />
      </PageSection>

      <Image
        src={image.data || graphicsData.homepage}
        alt={image.alt}
        sizes={buildImageSizeProp({ startSize: '100vw', lg: '460px' })}
        className={clsx(
          'aspect-video h-full w-full object-cover lg:aspect-auto',
          layout === 'reversed' && 'lg:order-first',
        )}
      />
    </section>
  )
}
