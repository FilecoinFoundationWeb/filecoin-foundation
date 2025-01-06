import { formatDate } from '@/utils/dateUtils'

import type { Event } from '../types/eventType'

type getMetaDataParams = {
  startDate: Event['startDate']
  endDate?: Event['endDate']
  location: Event['location']['primary']
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
