import { UTCDate } from '@date-fns/utc'
import { format } from 'date-fns'

import { formatDate } from '@/utils/dateUtils'

const PLACEHOLDER_DATE = '1970-01-01'

export function formatShortDate(date: Date) {
  return formatDate(date, 'EEE, MMM d')
}

export function formatTime(isoTimeString: string) {
  const utcTime = createComparableTimeUTC(isoTimeString)
  const formattedTime = format(utcTime, 'h:mma')
  return formattedTime.replace(/(am|pm)/i, ' $1')
}

export function createComparableTimeUTC(isoTimeString: string) {
  if (!isoTimeString.endsWith('Z')) {
    throw new Error('ISO time string must end with Z')
  }

  return new UTCDate(`${PLACEHOLDER_DATE}T${isoTimeString}`)
}
