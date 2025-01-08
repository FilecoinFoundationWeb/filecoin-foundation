import Image from 'next/image'

import type { AsyncNextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { createMetadata } from '@/utils/createMetadata'
import { extractSlugFromFilename } from '@/utils/fileUtils'
import { getFrontmatter } from '@/utils/getFrontmatter'

import { FeaturedPageFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import EventsContent from './components/EventsContent'
import { DEFAULT_CTA_TEXT } from './constants/constants'
import { getInvolvedData } from './data/getInvolvedData'
import { generateStructuredData } from './utils/generateStructuredData'
import { getEventData } from './utils/getEventData'
import { getMetaData } from './utils/getMetaData'

type Props = {
  searchParams: AsyncNextServerSearchParams
}

const { seo, featuredEntry: featuredEventPath } = getFrontmatter({
  path: PATHS.EVENTS,
  zodParser: FeaturedPageFrontmatterSchema.parse,
})

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.events1.data.src,
  },
  path: PATHS.EVENTS.path,
  overrideDefaultTitle: true,
})

const featuredEventSlug = extractSlugFromFilename(featuredEventPath)
const featuredEvent = getEventData(featuredEventSlug)

export default async function Events(props: Props) {
  const searchParams = await props.searchParams

  if (!featuredEvent) {
    throw new Error('Featured event not found')
  }

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        isFeatured
        title={featuredEvent.title}
        description={featuredEvent.description}
        metaData={getMetaData({
          startDate: featuredEvent.startDate,
          endDate: featuredEvent.endDate,
          location: featuredEvent.location.primary,
        })}
        image={{
          ...featuredEvent.image,
          alt: '',
          objectFit: 'cover',
        }}
        cta={{
          href: `${PATHS.EVENTS.path}/${featuredEvent.slug}`,
          text: DEFAULT_CTA_TEXT,
        }}
      />
      <PageSection kicker="Events" title="Network Events">
        <EventsContent searchParams={searchParams} />
      </PageSection>

      <PageSection
        kicker="Get Involved"
        title="Get in Touch With the Events Team"
      >
        <CardGrid cols="mdTwo" as="div">
          <div className="row-span-2 h-96 md:h-auto">
            <Image
              src={graphicsData.events2.data}
              alt={graphicsData.events2.alt}
              className="h-full rounded-lg object-cover"
              sizes={buildImageSizeProp({ startSize: '100vw', md: '480px' })}
            />
          </div>
          {getInvolvedData.map(({ title, description, cta }) => (
            <div key={title} className="h-48 md:h-56">
              <Card
                title={title}
                description={description}
                cta={cta}
                as="div"
              />
            </div>
          ))}
          <div className="h-48 md:h-56">
            <Image
              src={graphicsData.events3.data}
              alt={graphicsData.events3.alt}
              className="h-full rounded-lg object-cover"
              sizes={buildImageSizeProp({ startSize: '100vw', md: '480px' })}
            />
          </div>
        </CardGrid>
      </PageSection>
    </PageLayout>
  )
}
