import { CMSConfig, CMSFieldConfig } from '@/types/cmsConfig'
import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'

import configJson from '@/data/cmsConfigSchema.json'

const config: CMSConfig = configJson as CMSConfig

function validateEcosystemProjectFrontMatter(
  data: any,
  fields: CMSFieldConfig[]
): boolean {
  const missingFieldsToSkipCheck: string[] = ['content', 'seo']
  const extraFieldsToSkipCheck: string[] = ['slug', 'metadata']

  const missingFields: string[] = fields
    .filter(
      (field) =>
        !missingFieldsToSkipCheck.includes(field.name) &&
        data[field.name] === undefined
    )
    .map((field) => field.name)

  const extraFields: string[] = Object.keys(data).filter(
    (key) =>
      !extraFieldsToSkipCheck.includes(key) &&
      !fields.some((field) => field.name === key)
  )

  if (missingFields.length > 0) {
    console.error(
      `🔥🔥 Missing or incorrect fields in front matter: ${missingFields.join(
        ', '
      )}`
    )

    return false
  }

  if (extraFields.length > 0) {
    console.error(
      `🔥🔥 Extra fields found in front matter: ${extraFields.join(', ')}`
    )

    return false
  }

  return true
}

export function getEcosystemProjectData(
  directoryPath: string
): EcosystemProjectData[] {
  const markdownFiles = getMarkdownData(directoryPath)
  const ecosystemCollection = config.collections.find(
    (collection) => collection.name === 'ecosystem_projects'
  )

  if (!ecosystemCollection?.fields) {
    throw new Error('Ecosystem collection or fields not found in CMS config')
  }

  const fields = ecosystemCollection.fields

  return markdownFiles.map(({ data, slug }) => {
    if (!validateEcosystemProjectFrontMatter(data, fields)) {
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
      topic: data.topic,
      tags: data.tags,
      tech: data.tech,
      image: {
        url: data.image.url,
        alt: data.image.alt,
      },
      website: data.website,
      content: data.content,
      caseStudy: data['case-study'],
      repo: data.repo,
      twitter: data.twitter,
      videoUrl: data['video-url'],
      yearJoined: data['year-joined'],
      newsUpdate: data['news-update'],
      metadata: data.metadata,
    }
  })
}
