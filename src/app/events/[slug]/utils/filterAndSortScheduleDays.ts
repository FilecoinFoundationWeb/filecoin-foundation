import { UTCDate } from '@date-fns/utc'
import { compareAsc } from 'date-fns'

import type { Event } from '../../types/eventType'

export function filterAndSortScheduleDays(
  schedule: NonNullable<Event['schedule']>,
) {
  {
    const daysWithEvents = schedule.days.filter((day) => day.events.length > 0)

    const daysWithEventsSortedByTime = daysWithEvents.map((day) => ({
      ...day,
      events: day.events.sort((a, b) => {
        const startA = new UTCDate(a.start)
        const startB = new UTCDate(b.start)
        return compareAsc(startA, startB)
      }),
    }))

    const sortedDays = daysWithEventsSortedByTime.sort((a, b) => {
      const dateA = new UTCDate(a.date)
      const dateB = new UTCDate(b.date)
      return compareAsc(dateA, dateB)
    })

    return sortedDays
  }
}
