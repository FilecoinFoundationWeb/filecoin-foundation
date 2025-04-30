import { UTCDate } from '@date-fns/utc'
import { format } from 'date-fns'

import { formatDate } from '@filecoin-foundation/utils/dateUtils'


import { ISO_TIME_REGEX } from '@/schemas/DateTimeSchema'

const PLACEHOLDER_DATE = '1970-01-01'

export function formatShortDate(date: Date) {
  return formatDate(date, 'EEE, MMM d')
}

export function formatTime(isoTimeString: string) {
  const utcTime = createUTCDateFromTime(isoTimeString)
  const formattedTime = format(utcTime, 'h:mma')
  return formattedTime.replace(/(am|pm)/i, ' $1')
}

export function createUTCDateFromTime(isoTimeString: string) {
  const isISOString = ISO_TIME_REGEX.test(isoTimeString)

  if (!isISOString) {
    throw new Error('isoTimeString does not match the right format')
  }

  return new UTCDate(`${PLACEHOLDER_DATE}T${isoTimeString}`)
}
