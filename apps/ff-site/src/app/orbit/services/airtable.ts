import Airtable, { type FieldSet, type Records } from 'airtable'
import { z } from 'zod'

import { getUTCMidnightToday } from '@filecoin-foundation/utils/dateUtils'

import {
  AIRTABLE_ORBIT_EVENTS_CONFIG,
  APPROVED_STATUS_VALUE,
} from '../constants/airtableOrbitEventsConfig'
import { AirtableRecordSchema } from '../schema/AirtableRecordSchema'

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_READ_ONLY_TOKEN,
  requestTimeout: 3_000,
  noRetryIfRateLimited: true,
})

const { BASE_ID, EVENTS_TABLE_ID, FIELDS } = AIRTABLE_ORBIT_EVENTS_CONFIG
const { TITLE, CITY, START_DATE, REGISTRATION_LINK } = FIELDS

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
  return z.array(AirtableRecordSchema).parse(cleanRecords)
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
