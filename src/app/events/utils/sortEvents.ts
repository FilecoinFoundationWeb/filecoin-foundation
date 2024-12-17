import {
  compareAsc,
  compareDesc,
  isAfter,
  isBefore,
  startOfTomorrow,
  startOfYesterday,
} from 'date-fns'

import type { NonEmptyMutableArray } from '@/types/utils'

import type { Event } from '../types/eventType'

type DateFields = Pick<Event, 'startDate' | 'endDate'>
type CompareFunction = typeof compareAsc | typeof compareDesc

function sortEvents<T extends DateFields>(
  events: Array<T>,
  compareFn: CompareFunction,
) {
  return [...events].sort((a, b) => compareFn(a.startDate, b.startDate))
}

export function sortEventsDesc<T extends DateFields>(events: Array<T>) {
  return sortEvents(events, compareDesc)
}

export function sortEventsAsc<T extends DateFields>(events: Array<T>) {
  return sortEvents(events, compareAsc)
}

export function sortNonEmptyEventsAsc<
  T extends DateFields,
  Array extends NonEmptyMutableArray<T>,
>(events: Array) {
  return sortEvents(events, compareAsc) as Array
}

export function getUpcomingEvents<T extends DateFields>(events: Array<T>) {
  const yesterday = startOfYesterday()

  return sortEventsAsc(
    events.filter(({ startDate, endDate }) =>
      isAfter(getEventDate(startDate, endDate), yesterday),
    ),
  )
}

export function getPastEvents<T extends DateFields>(events: Array<T>) {
  const tomorrow = startOfTomorrow()

  return sortEventsDesc(
    events.filter(({ startDate, endDate }) =>
      isBefore(getEventDate(startDate, endDate), tomorrow),
    ),
  )
}

function getEventDate(
  startDate: Event['startDate'],
  endDate: DateFields['endDate'],
) {
  return endDate || startDate
}
