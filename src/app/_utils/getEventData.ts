import { CMSConfig, CMSFieldConfig } from '@/types/cmsConfig'
import { EventData } from '@/types/eventTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'

import configJson from '@/data/cmsConfigSchema.json'

const config: CMSConfig = configJson as CMSConfig

function validateEventFrontMatter(
  data: any,
  fields: CMSFieldConfig[]
): boolean {
  const fieldsToSkipCheck: string[] = ['seo']
  const missingFields: string[] = fields
    .filter(
      (field) =>
        !fieldsToSkipCheck.includes(field.name) &&
        data[field.name] === undefined
    )
    .map((field) => field.name)

  if (missingFields.length > 0) {
    console.error(
      `🔥🔥 Missing or incorrect fields in front matter: ${missingFields.join(
        ', '
      )}`
    )
    return false
  }

  return true
}

export function getEventData(directoryPath: string): EventData[] {
  const markdownFiles = getMarkdownData(directoryPath)
  const eventCollection = config.collections.find(
    (collection) => collection.name === 'events'
  )

  if (!eventCollection?.fields) {
    throw new Error('Event collection or fields not found in CMS config')
  }

  const fields = eventCollection.fields

  return markdownFiles.map(({ data, slug }) => {
    if (!validateEventFrontMatter(data, fields)) {
      throw new Error(
        `The markdown file for slug '${slug}' does not have the correct front matter structure.`
      )
    }

    return {
      title: data.title,
      slug: slug,
      createdOn: data['created-on'],
      updatedOn: data['updated-on'],
      publishedOn: data['published-on'],
      featured: data.featured,
      description: data.description,
      cta: {
        url: data.cta.url,
        text: data.cta.text,
      },
      startDate: data['start-date'],
      endDate: data['end-date'],
      image: {
        url: data.image.url,
        alt: data.image.alt,
      },
      eventType: data['event-type'],
      involvement: data.involvement,
      metadata: data.metadata,
    }
  })
}
