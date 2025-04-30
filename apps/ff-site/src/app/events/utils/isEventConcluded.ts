import { isBefore } from 'date-fns'

import { getUTCMidnightToday } from '@filecoin-foundation/utils/dateUtils'


import type { Event } from '../types/eventType'

type StartDate = Event['startDate']
type EndDate = Event['endDate']

export function isEventConcluded(startDate: StartDate, endDate: EndDate) {
  const today = getUTCMidnightToday()
  const eventDate = endDate || startDate

  return isBefore(eventDate, today)
}
