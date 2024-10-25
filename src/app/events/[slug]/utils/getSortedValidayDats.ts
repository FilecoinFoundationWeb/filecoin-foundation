import type { Event } from '../../types/eventType'

export function getSortedValidDays(schedule: NonNullable<Event['schedule']>) {
  return schedule.days
    .filter((day) => day.events.length > 0)
    .map((day) => ({
      ...day,
      events: day.events.sort(
        (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
      ),
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}
