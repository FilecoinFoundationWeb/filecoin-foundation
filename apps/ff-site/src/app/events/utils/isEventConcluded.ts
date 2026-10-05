import { isBefore } from 'date-fns'

import { getTodayISODateOnly } from '@filecoin-foundation/utils/dateUtils'

import type { Event } from '@/qino/collections/events'

export function isEventConcluded(
  startDate: Event['startDate'],
  endDate: Event['endDate'],
) {
  const today = getTodayISODateOnly()
  const eventDate = endDate || startDate

  return isBefore(eventDate, today)
}
