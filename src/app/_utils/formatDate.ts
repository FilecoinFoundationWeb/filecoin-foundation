export function isDateValid(date: string | Date): boolean {
  return !Number.isNaN(new Date(date).getTime())
}

export function formatDate(dateString: string | Date): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  if (!isDateValid(date)) {
    throw new Error(`Invalid date provided: ${dateString}`)
  }

  return date.toLocaleDateString('en-US', options)
}
