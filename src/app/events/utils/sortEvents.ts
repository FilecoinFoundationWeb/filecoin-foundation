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

  return sortEventsAsc(upcomingEvents)
}

export function getPastEvents(events: Array<Event>) {
  const tomorrow = startOfTomorrow()

  const pastEvents = events.filter((event) => {
    const eventDate = event.endDate || event.startDate
    return isBefore(eventDate, tomorrow)
  })

  return sortEventsDesc(pastEvents)
}

export function sortEventsDesc(events: Array<Event>) {
  return [...events].sort((eventA, eventB) => {
    return compareDesc(eventA.startDate, eventB.startDate)
  })
}

function sortEventsAsc(events: Array<Event>) {
  return [...events].sort((eventA, eventB) => {
    return compareAsc(eventA.startDate, eventB.startDate)
  })
}
