import { compareAsc } from 'date-fns'

import type { Event } from '../../types/eventType'

import { createUTCDateFromTime } from './dateUtils'

export function filterAndSortScheduleDays(
  schedule: NonNullable<Event['schedule']>,
) {
  const daysWithEvents = schedule.days.filter((day) => day.events.length > 0)

  const daysWithEventsSortedByTime = daysWithEvents.map((day) => ({
    ...day,
    events: day.events.slice().sort((a, b) => {
      const timeA = createUTCDateFromTime(a.startTime)
      const timeB = createUTCDateFromTime(b.startTime)
      return compareAsc(timeA, timeB)
    }),
  }))

  const sortedDays = daysWithEventsSortedByTime.slice().sort((a, b) => {
    return compareAsc(a.date, b.date)
  })

  return sortedDays
}
