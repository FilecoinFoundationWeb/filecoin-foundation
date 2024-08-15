import type { BlogPostData } from '@/schemas/blogPostDataSchema'
import type { EventData } from '@/schemas/eventDataSchema'

import { formatDate } from '@/utils/dateUtils'

export function getBlogPostMetaData(publishedOn?: BlogPostData['publishedOn']) {
  return publishedOn ? [formatDate(publishedOn)] : []
}

export function getEventMetaData(event: EventData) {
  if (!event.startDate) {
    return []
  }

  const { startDate, endDate, location } = event

  const formattedStartDate = formatDate(startDate)
  const formattedEndDate = endDate ? formatDate(endDate) : null

  const metaDataContent = [formattedStartDate]

  if (formattedEndDate) {
    metaDataContent[0] += ` - ${formattedEndDate}`
  }

  if (location) {
    metaDataContent.push(location)
  }

  return metaDataContent
}
