import { z } from 'zod'

import { AIRTABLE_ORBIT_EVENTS_CONFIG } from '../constants/airtableOrbitEventsConfig'

const { TITLE, CITY, START_DATE, REGISTRATION_LINK } =
  AIRTABLE_ORBIT_EVENTS_CONFIG.FIELDS

export const AirtableRecordSchema = z.object({
  [TITLE]: z.string(),
  [CITY]: z.string(),
  [START_DATE]: z.coerce.date(),
  [REGISTRATION_LINK]: z.url().optional(),
})
