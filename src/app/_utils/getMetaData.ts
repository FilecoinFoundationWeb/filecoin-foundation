import type { BlogPostData } from '@/types/blogPostType'
import type { EventData } from '@/types/eventDataType'

import { formatDate } from '@/utils/dateUtils'

export function getBlogPostMetaData(publishedOn?: BlogPostData['publishedOn']) {
  return publishedOn ? [formatDate(publishedOn)] : []
}

export function getEventMetaData(event: EventData) {
  const { startDate, endDate, location } = event
  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = endDate ? ` - ${formatDate(endDate)}` : ''
  const formattedDate = `${formattedStartDate}${formattedEndDate}`

  return location ? [formattedDate, location] : [formattedDate]
}
