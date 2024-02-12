import { WebPage, WithContext } from 'schema-dts'

import EventsList from '@/components/EventsList'
import PageHeader from '@/components/PageHeader'
import StructuredDataScript from '@/components/StructuredDataScript'

import { EventData } from '@/types/eventTypes'

import { createMetadata } from '@/utils/createMetadata'
import { getMarkdownData } from '@/utils/getMarkdownData'
import { sortEvents } from '@/utils/sortEvents'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/events.md'

import { BASE_URL } from '@/_constants/siteMetadata'
import { PATHS, CONTENT_PATHS } from '@/constants/paths'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.EVENTS)

const events: EventData[] = getMarkdownData(
  CONTENT_PATHS.EVENTS.POSTS as string
)
const sortedEvents = sortEvents(events)

const eventsPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.EVENTS,
})

const eventsPageStructuredData: WithContext<WebPage> = {
  ...eventsPageBaseData,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: sortedEvents.slice(0, 5).map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Event',
        name: event.title,
        startDate: event['f_start-date'],
        endDate: event['f_end-date'],
        description: event.f_description,
        url: `${BASE_URL}${PATHS.EVENTS}/${event.slug}` || event.f_cta,
      },
    })),
  },
}

export default function Events() {
  return (
    <>
      <StructuredDataScript structuredData={eventsPageStructuredData} />
      <PageHeader title={title} description={description} />

      <div>
        <EventsList events={sortedEvents} />
      </div>
    </>
  )
}
