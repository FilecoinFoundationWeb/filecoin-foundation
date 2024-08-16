import { EventFrontMatterSchema } from '@/schemas/eventFrontMatterSchema'

export function convertMarkdownToEventData(data: Record<string, any>) {
  const result = EventFrontMatterSchema.safeParse({
    title: data.title,
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
    console.error('🔥 Validation errors:')
    console.error(`Title: ${data.title}`)
    console.error(`Slug: ${data.slug}`)

    result.error.errors.forEach((error) => {
      console.error(`Path: ${error.path.join(' > ')}`)
      console.error(`Issue: ${error.message}`)
    })

    throw new Error('Invalid event data')
  }
}
