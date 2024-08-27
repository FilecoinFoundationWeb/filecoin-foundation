import Airtable, { FieldSet, Records } from 'airtable'
import { z } from 'zod'

import { getUTCMidnightToday } from '@/utils/dateUtils'

import { AIRTABLE_ORBIT_EVENTS_CONFIG } from '../constants/airtableOrbitEventsConfig'

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_READ_ONLY_TOKEN })

const { BASE_ID, EVENTS_TABLE_ID, FIELDS, APPROVED_STATUS_VALUE } =
  AIRTABLE_ORBIT_EVENTS_CONFIG
const { TITLE, CITY, START_DATE, REGISTRATION_LINK } = FIELDS

const airtableRecordSchema = z.object({
  [TITLE]: z.string(),
  [CITY]: z.string(),
  [START_DATE]: z.coerce.date(),
  [REGISTRATION_LINK]: z.string().url().optional(),
})

export async function fetchAndParseAirtableEvents() {
  const rawAirtableRecords = await fetchAirtableRecords()
  const validatedRecords = validateRawRecords(rawAirtableRecords)
  const humanReadableRecords = getHumanReadableRecords(validatedRecords)

  return humanReadableRecords
}

function fetchAirtableRecords() {
  const today = getUTCMidnightToday()
  const todayISO = today.toISOString()

  return airtable
    .base(BASE_ID)
    .table(EVENTS_TABLE_ID)
    .select({
      fields: Object.values(FIELDS),
      returnFieldsByFieldId: true,
      filterByFormula: `AND(
      {${FIELDS.STATUS}} = '${APPROVED_STATUS_VALUE}',
      IS_AFTER({${FIELDS.START_DATE}}, '${todayISO}')
    )`,
      sort: [
        {
          field: FIELDS.START_DATE,
          direction: 'asc',
        },
      ],
    })
    .all()
}

function validateRawRecords(rawRecords: Records<FieldSet>) {
  const cleanRecords = rawRecords.map((record) => record.fields)
  return z.array(airtableRecordSchema).parse(cleanRecords)
}

function getHumanReadableRecords(
  validatedRecords: ReturnType<typeof validateRawRecords>,
) {
  return validatedRecords.map((event) => ({
    title: event[TITLE],
    city: event[CITY],
    startDate: event[START_DATE],
    registrationLink: event[REGISTRATION_LINK],
  }))
}
