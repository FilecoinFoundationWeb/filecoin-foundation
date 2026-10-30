import Image from 'next/image'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type { AsyncQueryParams } from '@filecoin-foundation/utils/types/urlTypes'

import { PATHS } from '@/constants/paths'

import { eventCollection } from '@/qino/collections/events'
import { eventsPageItem } from '@/qino/items/eventsPage'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Card } from '@/components/Card'
import { PageSection } from '@/components/PageSection'

import EventsContent from './components/EventsContent'
import { getInvolvedData } from './data/getInvolvedData'
import { generateStructuredData } from './utils/generateStructuredData'

type Props = {
  searchParams: AsyncQueryParams
}

export default async function Events(props: Props) {
  const { seo } = await eventsPageItem.getEntry()

  const searchParams = await props.searchParams
  const events = await eventCollection.getEntries()

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <h1 className="sr-only">Events</h1>
      <PageSection kicker="Events" title="Network Events">
        <EventsContent searchParams={searchParams} events={events} />
      </PageSection>

      <PageSection
        kicker="Get Involved"
        title="Get in Touch With the Events Team"
      >
        <CardGrid as="div" cols="mdTwo">
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
                as="div"
                description={{ text: description }}
                cta={cta}
                title={{
                  text: title,
                }}
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

export async function generateMetadata() {
  const { seo } = await eventsPageItem.getEntry()

  return createMetadata({
    title: { absolute: seo.title },
    description: seo.description,
    image: graphicsData.events1.data.src,
    path: PATHS.EVENTS.path,
  })
}
