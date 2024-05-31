import { type EventData } from '@/types/eventTypes'

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
    location: data.location,
    externalLink: {
      href: data['external-link'].href,
      text: data['external-link'].text,
    },
    startDate: data['start-date'],
    endDate: data['end-date'],
    image: {
      url: data.image?.url || '',
      alt: data.image?.alt || '',
    },
    involvement: data.involvement,
    seo: data.seo,
  }
}
