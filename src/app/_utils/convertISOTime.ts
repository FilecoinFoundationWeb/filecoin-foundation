type extractTimeFromISOType = {
  day: number
  month: string
  time: string
}

export function extractTimeFromISO(
  isoDateString: string,
): extractTimeFromISOType {
  const date = new Date(isoDateString)

  const day = date.getDate()
  const month = date.toLocaleDateString('en-us', { month: 'short' })
  const time = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return {
    day,
    month,
    time,
  }
}

export function addMinutesToISO(
  isoDateString: string,
  durationInMinutes: number = 30,
) {
  const date = new Date(isoDateString)

  const durationInMilliseconds = durationInMinutes * 60000

  const newTimeInMilliseconds = date.getTime() + durationInMilliseconds

  const newDate = new Date(newTimeInMilliseconds)

  const time = newDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return time
}
