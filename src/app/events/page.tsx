import { WebPage, WithContext } from 'schema-dts'

import { EventsList } from '@/components/EventsList'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { EventData } from '@/types/eventTypes'

import { createMetadata } from '@/utils/createMetadata'
import { formatDate } from '@/utils/formatDate'
import { getEventsData } from '@/utils/getEventData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/events.md'

import { BASE_URL } from '@/_constants/siteMetadata'
import { PATHS } from '@/constants/paths'

const { featured_post: featuredEventSlug, seo } = attributes
export const metadata = createMetadata(seo, PATHS.EVENTS.path)

const events = getEventsData()
const featuredEvent = events.find((event) => event.slug === featuredEventSlug)

const eventsPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.EVENTS.path,
})

const eventsPageStructuredData: WithContext<WebPage> = {
  ...eventsPageBaseData,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: events.slice(0, 5).map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Event',
        name: event.title,
        startDate: event.startDate,
        endDate: event.endDate,
        description: event.description,
        url: `${event.cta?.url} || ${BASE_URL}${PATHS.EVENTS.path}/${event.slug}`,
      },
    })),
  },
}

function getMetaDataContent(event: EventData) {
  if (!event.startDate || !event.location) {
    return []
  }

  const { startDate, endDate, location } = event
  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = endDate ? formatDate(endDate) : null

  const metaDataContent = [formattedStartDate]

  if (formattedEndDate) {
    metaDataContent[0] += ` - ${formattedEndDate}`
  }

  metaDataContent.push(location || 'Not available')

  return metaDataContent
}

export default function Events() {
  if (!featuredEvent) {
    throw new Error('Featured event not found')
  }

  return (
    <PageLayout>
      <StructuredDataScript structuredData={eventsPageStructuredData} />
      <PageHeader
        isHighlighted
        title={featuredEvent.title}
        description={featuredEvent.description || 'Description not available.'}
        metaData={getMetaDataContent(featuredEvent)}
        cta={{
          href: `${PATHS.EVENTS.path}/${featuredEventSlug}`,
          text: 'View Event Details',
        }}
        image={featuredEvent.image}
      />

      <PageSection kicker="Events" title="All Events">
        <EventsList events={events} />
      </PageSection>
    </PageLayout>
  )
}
