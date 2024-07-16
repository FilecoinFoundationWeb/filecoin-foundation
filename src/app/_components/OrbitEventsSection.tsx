import Airtable from 'airtable'
import z from 'zod'

import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'
import { FilterContainer } from '@/components/FilterContainer'
import { NoResultsMessage } from '@/components/NoResultsMessage'
import { Pagination } from '@/components/Pagination'
import { Search } from '@/components/Search'

import { NextServerSearchParams } from '@/types/searchParams'

import { formatDate } from '@/utils/formatDate'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_READ_ONLY_TOKEN })

const AIRTABLE_ORBIT_BASE = {
  ID: 'appAGdqyYrqoFNuPI',
  EVENTS_TABLE: {
    ID: 'tblnrsxREgBikWu9A',
    FIELDS: {
      CITY: 'fldQJZQAS4Jm0eiiL',
      START_DATE: 'flddTSgPuKgL6h1JG',
      STATUS: 'fldnRqMzqmu7VLUlD',
      TITLE: 'fldhD7ClKauhqeD79',
      REGISTRATION_LINK: 'fldlcV4631rFgbdd6',
    },
  },
} as const

const AIRTABLE_APPROVED_STATUS = 'Approved'

const { TITLE, CITY, START_DATE, REGISTRATION_LINK } =
  AIRTABLE_ORBIT_BASE.EVENTS_TABLE.FIELDS

const airtableRecordSchema = z.object({
  [TITLE]: z.string(),
  [CITY]: z.string(),
  [START_DATE]: z.string().datetime(),
  [REGISTRATION_LINK]: z.string().url(),
})

const airtableRecordsSchema = z.array(airtableRecordSchema)

async function fetchAndParseAirtableEvents() {
  const rawAirtableRecords = await airtable
    .base(AIRTABLE_ORBIT_BASE.ID)
    .table(AIRTABLE_ORBIT_BASE.EVENTS_TABLE.ID)
    .select({
      fields: Object.values(AIRTABLE_ORBIT_BASE.EVENTS_TABLE.FIELDS),
      returnFieldsByFieldId: true,
      sort: [
        {
          field: AIRTABLE_ORBIT_BASE.EVENTS_TABLE.FIELDS.START_DATE,
          direction: 'asc',
        },
      ],
      filterByFormula: `AND(
        {${AIRTABLE_ORBIT_BASE.EVENTS_TABLE.FIELDS.STATUS}} = '${AIRTABLE_APPROVED_STATUS}',
        IS_AFTER({${AIRTABLE_ORBIT_BASE.EVENTS_TABLE.FIELDS.START_DATE}}, '${new Date().toISOString()}')
      )`,
    })
    .all()

  const cleanRecords = rawAirtableRecords.map((record) => record.fields)

  const validatedRecords = airtableRecordsSchema.parse(cleanRecords)

  return validatedRecords.map((event) => ({
    title: event[TITLE],
    city: event[CITY],
    startDate: event[START_DATE],
    registrationLink: event[REGISTRATION_LINK],
  }))
}

type OrbitEventsGridProps = {
  events: Awaited<ReturnType<typeof fetchAndParseAirtableEvents>>
  searchParams: NextServerSearchParams
}

function OrbitEvents({ events, searchParams }: OrbitEventsGridProps) {
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
      <div className="flex justify-end">
        <div className="grow lg:max-w-readable">
          <Search query={searchQuery} id="search" />
        </div>
      </div>

      {paginatedResults.length === 0 ? (
        <NoResultsMessage />
      ) : (
        <>
          <CardGrid cols="smTwo">
            {paginatedResults.map((event, index) => {
              const { title, city, startDate, registrationLink } = event

              return (
                <Card
                  key={index}
                  title={title}
                  metaData={[formatDate(startDate), city]}
                  borderColor="brand-400"
                  textIsClamped={true}
                  cta={{ text: 'View Event Details', href: registrationLink }}
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

type OrbitEventsSectionProps = {
  searchParams: NextServerSearchParams
}

export async function OrbitEventsSection({
  searchParams,
}: OrbitEventsSectionProps) {
  try {
    const events = await fetchAndParseAirtableEvents()

    if (events.length === 0) {
      return (
        <div className="max-w-readable">
          <p>There are currently no upcoming events.</p>
        </div>
      )
    }

    return <OrbitEvents events={events} searchParams={searchParams} />
  } catch (error) {
    return (
      <div className="flex max-w-readable">
        <Button href={FILECOIN_FOUNDATION_URLS.orbit.eventsCalendar}>
          Check Upcoming Events
        </Button>
      </div>
    )
  }
}
