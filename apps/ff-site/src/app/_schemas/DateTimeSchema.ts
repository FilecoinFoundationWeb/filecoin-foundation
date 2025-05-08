import { z } from 'zod'

import { getISODateOnly } from '@filecoin-foundation/utils/dateUtils'

// Date only
export const IsoDateSchema = z.date().transform(getISODateOnly)

// Time only
export const ISO_TIME_REGEX = /^\d{2}:\d{2}:\d{2}\.000Z$/

export const IsoTimeSchema = z.string().regex(ISO_TIME_REGEX)
