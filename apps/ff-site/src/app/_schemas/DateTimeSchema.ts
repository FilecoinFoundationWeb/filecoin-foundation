import { z } from 'zod'

const ZERO_TIMESTAMP = '00:00:00.000Z'

export const IsoDateSchema = z.date().refine(isZeroTimestamp, {
  message:
    'This date must not contain a time portion in the CMS, it should follow ISO 8601 format: YYYY-MM-DD',
})

function isZeroTimestamp(date: Date) {
  return date.toISOString().endsWith(ZERO_TIMESTAMP)
}

export const ISO_TIME_REGEX = /^\d{2}:\d{2}:\d{2}\.000Z$/

export const IsoTimeSchema = z.string().regex(ISO_TIME_REGEX)
