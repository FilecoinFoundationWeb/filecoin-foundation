import {
  compareAsc,
  compareDesc,
  isAfter,
  isBefore,
  startOfTomorrow,
  startOfYesterday,
} from 'date-fns'

import type { Event } from '../types/eventType'

type DateFields = Pick<Event, 'startDate' | 'endDate'>

export function getUpcomingEvents<T extends DateFields>(events: Array<T>) {
  const yesterday = startOfYesterday()

  const upcomingEvents = events.filter((event) => {
    const eventDate = event.endDate || event.startDate
    return isAfter(new Date(eventDate), yesterday)
  })

  return sortEventsAsc(upcomingEvents)
}

export function getPastEvents<T extends DateFields>(events: Array<T>) {
  const tomorrow = startOfTomorrow()

  const pastEvents = events.filter((event) => {
    const eventDate = event.endDate || event.startDate
    return isBefore(new Date(eventDate), tomorrow)
  })

  return sortEventsDesc(pastEvents)
}

export function sortEventsDesc<T extends DateFields>(events: Array<T>) {
  return [...events].sort((eventA, eventB) => {
    return compareDesc(new Date(eventA.startDate), new Date(eventB.startDate))
  })
}

export function sortEventsAsc<T extends DateFields>(events: Array<T>) {
  return [...events].sort((eventA, eventB) => {
    return compareAsc(new Date(eventA.startDate), new Date(eventB.startDate))
  })
}
