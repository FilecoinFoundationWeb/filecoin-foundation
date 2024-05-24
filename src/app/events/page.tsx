import dynamic from 'next/dynamic'
import Image from 'next/image'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { WebPage, WithContext } from 'schema-dts'

import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useSort } from '@/hooks/useSort'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { Search } from '@/components/Search'
import { Sort } from '@/components/Sort'
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
import { graphicsData } from '@/data/graphicsData'

import { getInvolvedData } from './data/getInvolvedData'

const NoSSRPagination = dynamic(
  () => import('@/components/Pagination').then((module) => module.Pagination),
  { ssr: false },
)

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

function prepareMetaData(
  startDate: EventData['startDate'],
  endDate: EventData['endDate'],
) {
  const formattedStartDate = startDate && formatDate(startDate)
  const formattedEndDate = endDate && formatDate(endDate)

  if (formattedStartDate && formattedEndDate) {
    return [`${formattedStartDate} – ${formattedEndDate}`]
  }

  return [formattedStartDate]
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

type Props = {
  searchParams: NextServerSearchParams
}

const EVENTS_PER_PAGE = 20

export default function Events({ searchParams }: Props) {
  if (!featuredEvent) {
    throw new Error('Featured event not found')
  }

  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: events,
    searchBy: ['title', 'location'],
  })

  const { sortQuery, sortedResults } = useSort({
    searchParams,
    entries: searchResults,
    sortBy: 'startDate',
    sortByDefault: 'newest',
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    searchParams,
    entries: sortedResults,
    entriesPerPage: EVENTS_PER_PAGE,
  })

  return (
    <PageLayout>
      <StructuredDataScript structuredData={eventsPageStructuredData} />
      <PageHeader
        isFeatured
        title={featuredEvent.title}
        description={featuredEvent.description || 'Description not available.'}
        metaData={getMetaDataContent(featuredEvent)}
        image={{
          type: 'remote',
          ...featuredEvent.image,
          fallback: graphicsData.events1,
        }}
        cta={{
          href: `${PATHS.EVENTS.path}/${featuredEventSlug}`,
          text: 'View Event Details',
        }}
      />

      <PageSection kicker="Events" title="Network Events">
        <div className="flex justify-end gap-3">
          <Search query={searchQuery} />
          <Sort query={sortQuery} />
        </div>

        {sortedResults.length === 0 ? (
          <NoResultsMessage />
        ) : (
          <>
            <CardGrid cols="smTwo">
              {paginatedResults.map((event) => {
                const { slug, title, image, involvement, startDate, endDate } =
                  event

                const metaData = prepareMetaData(startDate, endDate)

                return (
                  <Card
                    key={slug}
                    title={title}
                    tag={involvement}
                    metaData={metaData}
                    image={image}
                    borderColor="brand-400"
                    textIsClamped={true}
                    cta={{
                      href: `${PATHS.EVENTS.path}/${slug}`,
                      text: 'View Event Details',
                      icon: MagnifyingGlass,
                    }}
                  />
                )
              })}
            </CardGrid>

            <div className="mx-auto mt-1 w-full sm:mt-6 sm:w-auto">
              <NoSSRPagination
                pageCount={pageCount}
                currentPage={currentPage}
              />
            </div>
          </>
        )}
      </PageSection>

      <PageSection
        kicker="Get Involved"
        title="Get in Touch With the Events Team"
      >
        <CardGrid cols="mdTwo">
          <li className="row-span-2 h-96 md:h-auto">
            <Image
              src={graphicsData.events2.src}
              alt={graphicsData.events2.alt}
              className="h-full rounded-lg object-cover"
            />
          </li>
          {getInvolvedData.map(({ title, description, cta }) => (
            <li key={title} className="h-48 md:h-56">
              <Card
                title={title}
                description={description}
                cta={cta}
                as="div"
              />
            </li>
          ))}
          <li className="h-48 md:h-56">
            <Image
              src={graphicsData.events3.src}
              alt={graphicsData.events3.alt}
              className="h-full rounded-lg object-cover"
            />
          </li>
        </CardGrid>
      </PageSection>
    </PageLayout>
  )
}
