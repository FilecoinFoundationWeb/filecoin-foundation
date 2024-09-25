import { EventFrontMatterSchema } from '@/schemas/eventFrontMatterSchema'

export function convertMarkdownToEventData(data: Record<string, any>) {
  return EventFrontMatterSchema.parse({
    title: data.title,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    category: data.category,
    description: data.description,
    location: data.location,
    externalLink: data['external-link'],
    lumaCalendarLink: data['luma-calendar-link'],
    startDate: data['start-date'],
    endDate: data['end-date'],
    image: data.image,
    seo: data.seo,
  })
}
