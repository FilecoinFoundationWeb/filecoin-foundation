import * as Sentry from '@sentry/nextjs'

import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { NoSearchResultsMessage } from '@filecoin-foundation/ui/NoSearchResultsMessage'
import { Pagination, usePagination } from '@filecoin-foundation/ui/Pagination'
import { Search, useSearch } from '@filecoin-foundation/ui/Search'
import {
  PAGE_KEY,
  SEARCH_KEY,
} from '@filecoin-foundation/utils/constants/urlParamsConstants'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import type { QueryParams } from '@filecoin-foundation/utils/types/urlTypes'
import { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { FilterContainer } from '@/components/FilterContainer'

import {
  fetchAndParseAirtableEvents,
  type SanitizedOrbitEvents,
} from '../services/airtable'

import { DEFAULT_CTA_TEXT } from '@/events/constants/constants'

type OrbitEventsSectionProps = {
  searchParams: QueryParams
}

export async function OrbitEventsSection({
  searchParams,
}: OrbitEventsSectionProps) {
  const { data: events, error } = await fetchAndParseAirtableEvents()

  if (error) {
    Sentry.captureException(error)

    return (
      <div className="max-w-readable flex">
        <Button href={FILECOIN_FOUNDATION_URLS.orbit.eventsCalendar}>
          Check Upcoming Events
        </Button>
      </div>
    )
  }

  if (!events || events.length === 0) {
    return <p>There are currently no upcoming events.</p>
  }

  return <OrbitEvents events={events} searchParams={searchParams} />
}

type OrbitEventsProps = {
  events: SanitizedOrbitEvents
  searchParams: QueryParams
}

function OrbitEvents({ events, searchParams }: OrbitEventsProps) {
  const { searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: events,
    searchBy: ['title', 'city'],
  })

  const { pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: searchResults,
    entriesPerPage: 8,
  })

  return (
    <>
      <div className="lg:max-w-readable">
        <Search />
      </div>

      {paginatedResults.length === 0 ? (
        <NoSearchResultsMessage />
      ) : (
        <>
          <CardGrid as="section" cols="smTwo">
            {paginatedResults.map((event, index) => {
              const { title, city, startDate, registrationLink } = event

              const ctaProps = registrationLink
                ? { href: registrationLink, text: DEFAULT_CTA_TEXT }
                : undefined

              return (
                <Card
                  key={index}
                  as="article"
                  metaData={[formatDate(startDate), city]}
                  borderColor="light"
                  cta={ctaProps}
                  title={{
                    text: title,
                  }}
                />
              )
            })}
          </CardGrid>

          <FilterContainer.PaginationWrapper>
            <Pagination pageCount={pageCount} />
          </FilterContainer.PaginationWrapper>
        </>
      )}
    </>
  )
}
