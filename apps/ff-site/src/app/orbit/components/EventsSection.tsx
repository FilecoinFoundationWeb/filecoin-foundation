import { Button } from '@filecoin-foundation/ui/Button'
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
import * as Sentry from '@sentry/nextjs'
import { ZodError } from 'zod'

import { BASE_DOMAIN, FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { logZodError } from '@/utils/zodUtils'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { FilterContainer } from '@/components/FilterContainer'

import { fetchAndParseAirtableEvents } from '../services/airtable'

import { DEFAULT_CTA_TEXT } from '@/events/constants/constants'

type OrbitEventsSectionProps = {
  searchParams: QueryParams
}

export async function OrbitEventsSection({
  searchParams,
}: OrbitEventsSectionProps) {
  try {
    const events = await fetchAndParseAirtableEvents()

    if (events.length === 0) {
      return <p>There are currently no upcoming events.</p>
    }

    return <OrbitEvents events={events} searchParams={searchParams} />
  } catch (error) {
    Sentry.captureException(error)

    if (error instanceof ZodError) {
      logZodError(error, { location: 'Orbit Events' })
    }

    return (
      <div className="flex max-w-readable">
        <Button
          href={FILECOIN_FOUNDATION_URLS.orbit.eventsCalendar}
          baseDomain={BASE_DOMAIN}
        >
          Check Upcoming Events
        </Button>
      </div>
    )
  }
}

type OrbitEventsProps = {
  events: Awaited<ReturnType<typeof fetchAndParseAirtableEvents>>
  searchParams: QueryParams
}

function OrbitEvents({ events, searchParams }: OrbitEventsProps) {
  const { searchQuery, searchResults } = useSearch({
    searchQuery: normalizeQueryParam(searchParams, SEARCH_KEY),
    entries: events,
    searchBy: ['title', 'city'],
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    pageQuery: normalizeQueryParam(searchParams, PAGE_KEY),
    entries: searchResults,
    entriesPerPage: 8,
  })

  return (
    <>
      <div className="lg:max-w-readable">
        <Search query={searchQuery} />
      </div>

      {paginatedResults.length === 0 ? (
        <NoSearchResultsMessage baseDomain={BASE_DOMAIN} />
      ) : (
        <>
          <CardGrid cols="smTwo">
            {paginatedResults.map((event, index) => {
              const { title, city, startDate, registrationLink } = event

              const ctaProps = registrationLink
                ? { href: registrationLink, text: DEFAULT_CTA_TEXT }
                : undefined

              return (
                <Card
                  key={index}
                  title={title}
                  metaData={[formatDate(startDate), city]}
                  borderColor="brand-400"
                  textIsClamped={true}
                  cta={ctaProps}
                />
              )
            })}
          </CardGrid>

          <FilterContainer.PaginationWrapper>
            <Pagination pageCount={pageCount} currentPage={currentPage} />
          </FilterContainer.PaginationWrapper>
        </>
      )}
    </>
  )
}
