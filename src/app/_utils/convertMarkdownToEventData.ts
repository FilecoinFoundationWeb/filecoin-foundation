import { EventFrontMatterSchema } from '@/schemas/event/FrontMatterSchema'

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
    lumaEventsSection:
      data['luma-events-section']?.title &&
      data['luma-events-section']['embed-link']
        ? {
            title: data['luma-events-section'].title,
            embedLink: data['luma-events-section']['embed-link'],
          }
        : undefined,
    startDate: data['start-date'],
    endDate: data['end-date'],
    image: data.image,
    speakers: data.speakers,
    sponsors: data.sponsors,
    seo: data.seo,
  })
}
