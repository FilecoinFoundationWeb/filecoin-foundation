import { format } from 'date-fns'

export function formatDate(date: Date) {
  return format(date, 'MMM d, yyyy')
}

export function formatDateComponentsFromISO(isoDateString: string) {
  const date = new Date(isoDateString)

  return {
    day: format(date, 'd'),
    month: format(date, 'MMM'),
    time: format(date, 'HH:mm'),
  }
}

export function getTodayISO() {
  return format(new Date(), 'yyyy-MM-dd')
}

export function getUTCMidnightToday() {
  const now = new Date()
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  )
}
