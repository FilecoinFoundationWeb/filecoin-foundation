import { isValid, format, parseISO } from 'date-fns'

export function isDateValid(date: string | Date): boolean {
  if (typeof date === 'string') {
    return isValid(parseISO(date))
  }
  return isValid(date)
}

export function formatDate(dateString: string | Date): string {
  let date: Date
  if (typeof dateString === 'string') {
    date = parseISO(dateString)
  } else {
    date = dateString
  }

  if (!isDateValid(date)) {
    throw new Error(`Invalid date provided: ${dateString}`)
  }

  return format(date, 'MMM d, yyyy')
}

export function getTodayISO() {
  return format(new Date(), 'yyyy-MM-dd')
}
