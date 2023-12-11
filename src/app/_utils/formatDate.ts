type FormatDateOption = 'default' | 'blog' | 'event'

export function formatDate(
  dateString: string,
  format: FormatDateOption = 'default'
): string {
  const date = new Date(dateString)

  if (Number.isNaN(date.getTime())) {
    console.error('Invalid date provided:', dateString)
    return 'Invalid Date'
  }

  let options: Intl.DateTimeFormatOptions

  switch (format) {
    case 'blog':
      options = { year: 'numeric', month: 'long', day: 'numeric' }
      break
    case 'event':
      options = { year: 'numeric', month: '2-digit', day: '2-digit' }
      break
    default:
      options = { year: 'numeric', month: 'long', day: 'numeric' }
  }

  return date.toLocaleDateString('en-US', options)
}
