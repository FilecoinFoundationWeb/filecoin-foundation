import { formatDate } from '@/utils/dateUtils'

import type { BlogPost } from '@/blog/types/blogPostType'
import type { Event } from '@/events/types/eventType'

export function getBlogPostMetaData(publishedOn?: BlogPost['publishedOn']) {
  return publishedOn ? [formatDate(publishedOn)] : []
}

export function getEventMetaData(event: Event) {
  const { startDate, endDate, location } = event
  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = endDate ? ` - ${formatDate(endDate)}` : ''
  const formattedDate = `${formattedStartDate}${formattedEndDate}`

  return [formattedDate, location.primary]
}
