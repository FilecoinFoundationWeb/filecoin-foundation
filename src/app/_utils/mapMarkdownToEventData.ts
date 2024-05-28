import { EventData } from '@/types/eventTypes'

export function mapMarkdownToEventData({
  data,
}: {
  data: any
  content?: string
}): EventData {
  return {
    title: data.title,
    slug: data.slug,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    description: data.description,
    cta: {
      url: data.cta?.url || '',
      text: data.cta?.text || '',
    },
    startDate: data['start-date'],
    endDate: data['end-date'],
    location: data.location,
    image: {
      url: data.image?.url || '',
      alt: data.image?.alt || '',
    },
    involvement: data.involvement,
    metadata: data.metadata,
  }
}
