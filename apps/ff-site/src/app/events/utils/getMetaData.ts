import { isSameDay } from 'date-fns'

import { formatDate } from '@filecoin-foundation/utils/dateUtils'


import type { Event } from '../types/eventType'

type getMetaDataParams = {
  startDate: Event['startDate']
  endDate: Event['endDate']
  location: Event['location']['primary']
}

export function getMetaData({
  startDate,
  endDate,
  location,
}: getMetaDataParams) {
  const formattedStartDate = formatDate(startDate)

  if (!endDate) {
    return [formattedStartDate, location]
  }

  if (isSameDay(startDate, endDate)) {
    return [formattedStartDate, location]
  }

  const formattedEndDate = formatDate(endDate)
  const dateRange = `${formattedStartDate} - ${formattedEndDate}`

  return [dateRange, location]
}
