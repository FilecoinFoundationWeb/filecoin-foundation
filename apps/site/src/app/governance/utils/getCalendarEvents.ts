import { CalendarEventsSchema } from '../schemas/CalendarEventSchemas'

export async function getCalendarEvents(endpoint: string) {
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error('getEvents: Failed to fetch events')
  }

  const data = await response.json()
  return CalendarEventsSchema.parse(data)
}
