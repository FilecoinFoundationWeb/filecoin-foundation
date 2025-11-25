export function isValidDate(dateString: string) {
  const date = new Date(dateString)
  return !isNaN(date.getTime())
}

export function formatDateTime(isoString: string) {
  if (!isValidDate(isoString)) {
    return null
  }

  const date = new Date(isoString)

  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return `${formattedDate} at ${formattedTime}`
}
