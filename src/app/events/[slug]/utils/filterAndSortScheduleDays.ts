import { UTCDate } from '@date-fns/utc'

import type { Event } from '../../types/eventType'

export function filterAndSortScheduleDays(
  schedule: NonNullable<Event['schedule']>,
) {
  {
    const daysWithEvents = schedule.days.filter((day) => day.events.length > 0)

    const daysWithEventsSortedByTime = daysWithEvents.map((day) => ({
      ...day,
      events: day.events.sort((a, b) => {
        const startA = new UTCDate(a.start).getTime()
        const startB = new UTCDate(b.start).getTime()
        return startA - startB
      }),
    }))

    const sortedDays = daysWithEventsSortedByTime.sort((a, b) => {
      const dateA = new UTCDate(a.date).getTime()
      const dateB = new UTCDate(b.date).getTime()
      return dateA - dateB
    })

    return sortedDays
  }
}
