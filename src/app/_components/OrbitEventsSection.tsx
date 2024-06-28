import Airtable from 'airtable'
import z from 'zod'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

import { formatDate } from '@/utils/formatDate'

import { DEFAULT_ENTRIES_PER_PAGE } from '@/constants/paginationConstants'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_READ_ONLY_TOKEN })

// Airtable API Orbit: https://airtable.com/appAGdqyYrqoFNuPI/api/docs#javascript/table:event%20request
const ORBIT_BASE = {
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
const APPROVED_STATUS = 'Approved'

const { TITLE, CITY, START_DATE, STATUS, REGISTRATION_LINK } =
  ORBIT_BASE.EVENTS_TABLE.FIELDS

const orbitEventSchema = z.object({
  [TITLE]: z.string(),
  [CITY]: z.string(),
  [START_DATE]: z.string().datetime(),
  [STATUS]: z.literal(APPROVED_STATUS),
  [REGISTRATION_LINK]: z.string().url(),
})
const orbitEventsSchema = z.array(orbitEventSchema)

async function fetchAndParseOrbitEvents() {
  const records = await airtable
    .base(ORBIT_BASE.ID)
    .table(ORBIT_BASE.EVENTS_TABLE.ID)
    .select({
      maxRecords: DEFAULT_ENTRIES_PER_PAGE,
      fields: [...Object.values(ORBIT_BASE.EVENTS_TABLE.FIELDS)],
      returnFieldsByFieldId: true,
      sort: [
        { field: ORBIT_BASE.EVENTS_TABLE.FIELDS.START_DATE, direction: 'asc' },
      ],
      filterByFormula: `AND(
        {${ORBIT_BASE.EVENTS_TABLE.FIELDS.STATUS}} = '${APPROVED_STATUS}',
        IS_AFTER({${ORBIT_BASE.EVENTS_TABLE.FIELDS.START_DATE}}, '${new Date().toISOString()}')
      )`,
    })
    .all()

  return orbitEventsSchema.parse(records.map((record) => record.fields))
}

export async function OrbitEventsSection() {
  try {
    const events = await fetchAndParseOrbitEvents()

    if (events.length === 0) {
      return (
        <div className="max-w-readable">
          <p>There are currently no upcoming events.</p>
        </div>
      )
    }

    return (
      <CardGrid cols="mdTwo">
        {events.map((event, index) => {
          const title = event[TITLE]
          const startDate = formatDate(event[START_DATE])
          const city = event[CITY]
          const link = event[REGISTRATION_LINK]

          return (
            <Card
              key={index}
              title={title}
              metaData={[startDate, city]}
              borderColor="brand-400"
              textIsClamped={true}
              cta={{ text: 'View Event Details', href: link }}
            />
          )
        })}
      </CardGrid>
    )
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
