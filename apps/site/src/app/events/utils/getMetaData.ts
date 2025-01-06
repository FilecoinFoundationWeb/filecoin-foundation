import { formatDate } from '@/utils/dateUtils'

import type { Event } from '../types/eventType'

type getMetaDataParams = {
  location: Event['location']['primary'],
  startDate: Event['startDate'],
  endDate?: Event['endDate']
}

export function getMetaData({
  startDate,
  endDate,
  location,
}: getMetaDataParams) {
  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = endDate ? ` - ${formatDate(endDate)}` : ''
  const formattedDate = `${formattedStartDate}${formattedEndDate}`

  return [formattedDate, location]
}
