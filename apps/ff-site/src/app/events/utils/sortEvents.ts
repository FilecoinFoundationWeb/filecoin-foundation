import { compareAsc, compareDesc, isAfter, isBefore } from 'date-fns'

import { getTodayDateISO } from '@filecoin-foundation/utils/dateUtils'
import type { NonEmptyMutableArray } from '@filecoin-foundation/utils/types/utilTypes'

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
  const today = getTodayDateISO()

  return sortEventsAsc(
    events.filter(({ startDate, endDate }) =>
      isAfter(endDate || startDate, today),
    ),
  )
}

export function getPastEvents<T extends DateFields>(events: Array<T>) {
  const today = getTodayDateISO()

  return sortEventsDesc(
    events.filter(({ startDate, endDate }) =>
      isBefore(endDate || startDate, today),
    ),
  )
}
