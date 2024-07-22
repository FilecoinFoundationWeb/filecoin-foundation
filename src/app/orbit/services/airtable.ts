import Airtable from 'airtable'
import z from 'zod'

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

export async function fetchAndParseAirtableEvents() {
  const rawAirtableRecords = await airtable
    .base(AIRTABLE_ORBIT_BASE.ID)
    .table(AIRTABLE_ORBIT_BASE.EVENTS_TABLE.ID)
    .select({
      fields: Object.values(AIRTABLE_ORBIT_BASE.EVENTS_TABLE.FIELDS),
      returnFieldsByFieldId: true,
      filterByFormula: `AND(
        {${AIRTABLE_ORBIT_BASE.EVENTS_TABLE.FIELDS.STATUS}} = '${AIRTABLE_APPROVED_STATUS}',
        IS_AFTER({${AIRTABLE_ORBIT_BASE.EVENTS_TABLE.FIELDS.START_DATE}}, '${new Date().toISOString()}')
      )`,
      sort: [
        {
          field: AIRTABLE_ORBIT_BASE.EVENTS_TABLE.FIELDS.START_DATE,
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
