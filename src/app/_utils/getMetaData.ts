import { formatDate } from '@/utils/dateUtils'

import type { BlogPost } from '@/blog/types/blogPostType'
import type { Event } from '@/events/types/eventType'

export function getBlogPostMetaData(publishedOn?: BlogPost['publishedOn']) {
  return publishedOn ? [formatDate(publishedOn)] : []
}

type getEventMetaDataParams = {
  startDate: Event['startDate']
  endDate?: Event['endDate']
  location: Event['location']['primary']
}

export function getEventMetaData({
  startDate,
  endDate,
  location,
}: getEventMetaDataParams) {
  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = endDate ? ` - ${formatDate(endDate)}` : ''
  const formattedDate = `${formattedStartDate}${formattedEndDate}`

  return [formattedDate, location]
}
