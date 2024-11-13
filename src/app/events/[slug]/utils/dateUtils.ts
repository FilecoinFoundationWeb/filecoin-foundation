import { UTCDate } from '@date-fns/utc'
import { format } from 'date-fns'

export function formatDate(date: Date) {
  const utcDate = new UTCDate(date)
  return format(utcDate, 'EEE, MMM d')
}

export function formatTime(date: Date) {
  const utcDate = new UTCDate(date)
  const formattedTime = format(utcDate, 'h:mma')
  return formattedTime.replace(/(am|pm)/i, ' $1')
}
