import { z } from 'zod'

// Date only
export const IsoDateSchema = z.date().transform((date) => {
  return date.toISOString().split('T')[0]
})

// Time only
export const ISO_TIME_REGEX = /^\d{2}:\d{2}:\d{2}\.000Z$/

export const IsoTimeSchema = z.string().regex(ISO_TIME_REGEX)
