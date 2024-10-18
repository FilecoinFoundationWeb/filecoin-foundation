import {
  compareAsc,
  compareDesc,
  isAfter,
  isBefore,
  startOfTomorrow,
  startOfYesterday,
} from 'date-fns'

import type { Event } from '@/events/types/eventType'

export function getUpcomingEvents(events: Array<Event>) {
  const yesterday = startOfYesterday()

  const upcomingEvents = events.filter((event) => {
    const eventDate = event.endDate || event.startDate
    return isAfter(eventDate, yesterday)
  })

  const upcomingEventsSortedAsc = [...upcomingEvents].sort((eventA, eventB) => {
    return compareAsc(eventA.startDate, eventB.startDate)
  })

  return upcomingEventsSortedAsc
}

export function getPastEvents(events: Array<Event>) {
  const tomorrow = startOfTomorrow()

  const pastEvents = events.filter((event) => {
    const eventDate = event.endDate || event.startDate
    return isBefore(eventDate, tomorrow)
  })

  const pastEventsSortedDesc = sortEventsDesc(pastEvents)

  return pastEventsSortedDesc
}

// Look into endDate / pastDate
// Events can start at the same time but one can end before the other
export function sortEventsDesc(events: Array<Event>) {
  return [...events].sort((eventA, eventB) => {
    return compareDesc(eventA.startDate, eventB.startDate)
  })
}
