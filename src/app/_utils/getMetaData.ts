import type { BlogPost } from '@/types/blogPostType'
import type { Event } from '@/types/eventType'

import { formatDate } from '@/utils/dateUtils'

export function getBlogPostMetaData(publishedOn?: BlogPost['publishedOn']) {
  return publishedOn ? [formatDate(publishedOn)] : []
}

export function getEventMetaData(event: Event) {
  const { startDate, endDate, location } = event
  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = endDate ? ` - ${formatDate(endDate)}` : ''
  const formattedDate = `${formattedStartDate}${formattedEndDate}`

  return location ? [formattedDate, location] : [formattedDate]
}
