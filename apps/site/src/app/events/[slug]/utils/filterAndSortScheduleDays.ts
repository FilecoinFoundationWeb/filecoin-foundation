import { compareAsc } from 'date-fns'

import type { Event } from '../../types/eventType'

import { createComparableTimeUTC } from './dateUtils'

export function filterAndSortScheduleDays(
  schedule: NonNullable<Event['schedule']>,
) {
  const daysWithEvents = schedule.days.filter((day) => day.events.length > 0)

  const daysWithEventsSortedByTime = daysWithEvents.map((day) => ({
    ...day,
    events: day.events.toSorted((a, b) => {
      const timeA = createComparableTimeUTC(a.startTime)
      const timeB = createComparableTimeUTC(b.startTime)
      return compareAsc(timeA, timeB)
    }),
  }))

  const sortedDays = daysWithEventsSortedByTime.toSorted((a, b) => {
    return compareAsc(a.date, b.date)
  })

  return sortedDays
}
