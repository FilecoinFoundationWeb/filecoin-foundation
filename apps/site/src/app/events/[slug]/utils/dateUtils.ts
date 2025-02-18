import { UTCDate } from '@date-fns/utc'
import { format } from 'date-fns'

import { formatDate } from '@/utils/dateUtils'

export function formatShortDate(date: Date) {
  return formatDate(date, 'EEE, MMM d')
}

export function formatTime(date: Date) {
  const utcDate = new UTCDate(date)
  const formattedTime = format(utcDate, 'h:mma')
  return formattedTime.replace(/(am|pm)/i, ' $1')
}
