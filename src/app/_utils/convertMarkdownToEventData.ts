import { EventDataSchema, type EventData } from '@/models/eventDataModel'

export function convertMarkdownToEventData(data: any): EventData {
  const result = EventDataSchema.safeParse({
    title: data.title,
    slug: data.slug,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    category: data.category,
    description: data.description,
    location: data.location,
    externalLink: data['external-link'],
    startDate: data['start-date'],
    endDate: data['end-date'],
    image: data.image,
    seo: data.seo,
  })

  if (result.success) {
    return result.data
  } else {
    console.error(
      '🔥 Validation errors:',
      `Title: ${data.title}`,
      `Slug: ${data.slug}`,
      result.error.errors,
    )
    throw new Error('Invalid event data')
  }
}
