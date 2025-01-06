import * as Sentry from '@sentry/nextjs'
import { ZodError } from 'zod'

import type { NextServerSearchParams } from '@/types/searchParams'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { formatDate } from '@/utils/dateUtils'
import { logZodError } from '@/utils/zodUtils'

import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { FilterContainer } from '@/components/FilterContainer'
import { NoSearchResultsMessage } from '@/components/NoSearchResultsMessage'
import { Pagination } from '@/components/Pagination'
import { Search } from '@/components/Search'

import { DEFAULT_CTA_TEXT } from '@/events/constants/constants'

import { fetchAndParseAirtableEvents } from '../services/airtable'

type OrbitEventsSectionProps = {
  searchParams: NextServerSearchParams
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
        <Button href={FILECOIN_FOUNDATION_URLS.orbit.eventsCalendar}>
          Check Upcoming Events
        </Button>
      </div>
    )
  }
}

type OrbitEventsProps = {
  events: Awaited<ReturnType<typeof fetchAndParseAirtableEvents>>
  searchParams: NextServerSearchParams
}

function OrbitEvents({ events, searchParams }: OrbitEventsProps) {
  const { searchQuery, searchResults } = useSearch({
    searchParams,
    entries: events,
    searchBy: ['title', 'city'],
  })

  const { currentPage, pageCount, paginatedResults } = usePagination({
    searchParams,
    entries: searchResults,
    entriesPerPage: 8,
  })

  return (
    <>
      <div className="lg:max-w-readable">
        <Search query={searchQuery} />
      </div>

      {paginatedResults.length === 0 ? (
        <NoSearchResultsMessage />
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
