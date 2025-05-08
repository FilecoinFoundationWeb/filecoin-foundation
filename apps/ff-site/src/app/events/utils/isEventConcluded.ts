import { isBefore } from 'date-fns'

import { getTodayDateISO } from '@filecoin-foundation/utils/dateUtils'

import type { Event } from '../types/eventType'

export function isEventConcluded(
  startDate: Event['startDate'],
  endDate: Event['endDate'],
) {
  const today = getTodayDateISO()
  const eventDate = endDate || startDate

  return isBefore(eventDate, today)
}
