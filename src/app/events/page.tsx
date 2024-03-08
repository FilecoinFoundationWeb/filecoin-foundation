import { WebPage, WithContext } from 'schema-dts'

import { EventsList } from '@/components/EventsList'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getEventsData } from '@/utils/getEventData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/events.md'

import { BASE_URL } from '@/_constants/siteMetadata'
import { PATHS } from '@/constants/paths'

const { title, description, seo } = attributes
export const metadata = createMetadata(seo, PATHS.EVENTS.path)

const events = getEventsData()

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

export default function Events() {
  return (
    <>
      <StructuredDataScript structuredData={eventsPageStructuredData} />
      <PageHeader title={title} description={description} />

      <div>
        <EventsList events={events} />
      </div>
    </>
  )
}
