import { format } from 'date-fns'

export function formatDate(date: Date) {
  return format(date, 'EEE, MMM d')
}

export function formatTime(date: Date) {
  const formattedTime = format(date, 'h:mma')
  return formattedTime.replace(/(am|pm)/i, ' $1')
}
