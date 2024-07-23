import Airtable from 'airtable'
import z from 'zod'

import { AIRTABLE_ORBIT_EVENTS_CONFIG } from '../constants/airtableOrbitEventsConfig'

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_READ_ONLY_TOKEN })
const { BASE_ID, EVENTS_TABLE_ID, FIELDS, AIRTABLE_APPROVED_STATUS } =
  AIRTABLE_ORBIT_EVENTS_CONFIG
const { TITLE, CITY, START_DATE, REGISTRATION_LINK } = FIELDS

const airtableRecordSchema = z.object({
  [TITLE]: z.string(),
  [CITY]: z.string(),
  [START_DATE]: z.string().datetime(),
  [REGISTRATION_LINK]: z.string().url(),
})

const airtableRecordsSchema = z.array(airtableRecordSchema)

export async function fetchAndParseAirtableEvents() {
  const rawAirtableRecords = await airtable
    .base(BASE_ID)
    .table(EVENTS_TABLE_ID)
    .select({
      fields: Object.values(FIELDS),
      returnFieldsByFieldId: true,
      filterByFormula: `AND(
        {${FIELDS.STATUS}} = '${AIRTABLE_APPROVED_STATUS}',
        IS_AFTER({${FIELDS.START_DATE}}, '${new Date().toISOString()}')
      )`,
      sort: [
        {
          field: FIELDS.START_DATE,
          direction: 'asc',
        },
      ],
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
