import { formatDate } from '@/utils/dateUtils'

import type { Event } from '../types/eventType'

type EventMetaData = Pick<Event, 'startDate' | 'endDate' | 'location'>

export function getMetaData({ startDate, endDate, location }: EventMetaData) {
  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = endDate ? ` - ${formatDate(endDate)}` : ''
  const formattedDate = `${formattedStartDate}${formattedEndDate}`

  return location ? [formattedDate, location] : [formattedDate]
}
