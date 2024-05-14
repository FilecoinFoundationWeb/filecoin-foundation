import { WebPage, WithContext } from 'schema-dts'

import { useSearch } from '@/hooks/useSearch'

import { BlogSearchInput } from '@/components/BlogSearchInput'
import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { EventData } from '@/types/eventTypes'
import { NextServerSearchParams } from '@/types/searchParams'

import { createMetadata } from '@/utils/createMetadata'
import { formatDate } from '@/utils/formatDate'
import { getEventsData } from '@/utils/getEventData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/events.md'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getInvolvedData } from './data/getInvolvedData'

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

const sortedEvents = [...events].sort((a, b) => {
  if (!a.publishedOn || !b.publishedOn) return 0
  return new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime()
})

type Props = {
  searchParams: NextServerSearchParams
}

export default function Events({ searchParams }: Props) {
  if (!featuredEvent) {
    throw new Error('Featured event not found')
  }

  const { searchQuery, searchResults } = useSearch({
    searchParams,
    data: sortedEvents,
  })

  return (
    <PageLayout>
      <StructuredDataScript structuredData={eventsPageStructuredData} />
      <PageHeader
        isFeatured
        title={featuredEvent.title}
        description={featuredEvent.description || 'Description not available.'}
        metaData={getMetaDataContent(featuredEvent)}
        image={featuredEvent.image}
        cta={{
          href: `${PATHS.EVENTS.path}/${featuredEventSlug}`,
          text: 'View Event Details',
        }}
      />

      <PageSection kicker="Events" title="Network Events">
        <div className="flex justify-end">
          <BlogSearchInput query={searchQuery} />
        </div>

        {searchResults.length === 0 ? (
          <NoResultsMessage />
        ) : (
          <CardLayout>
            {searchResults.map((event) => (
              <Card key={event.slug} title={event.title} />
            ))}
          </CardLayout>
        )}
      </PageSection>

      <PageSection
        kicker="Get Involved"
        title="Get in Touch With the Events Team"
      >
        <CardLayout>
          {getInvolvedData.map(({ title, description, cta }) => (
            <Card
              key={title}
              title={title}
              description={description}
              cta={cta}
            />
          ))}
        </CardLayout>
      </PageSection>
    </PageLayout>
  )
}
