import { CaseStudyData } from '@/types/caseStudyTypes'
import { CMSConfig, CMSFieldConfig } from '@/types/cmsConfig'

import { getMarkdownData } from '@/utils/getMarkdownData'

import configJson from '@/data/cmsConfigSchema.json'

const config: CMSConfig = configJson as CMSConfig

function validateFrontMatter(data: any, fields: CMSFieldConfig[]): boolean {
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
      `Missing or incorrect fields in front matter: ${missingFields.join(', ')}`
    )
    return false
  }

  return true
}

export function getCaseStudiesData(directoryPath: string): CaseStudyData[] {
  const markdownFiles = getMarkdownData(directoryPath)
  const caseStudyCollection = config.collections.find(
    (collection) => collection.name === 'case_studies'
  )

  if (!caseStudyCollection?.fields) {
    throw new Error('Case study collection or fields not found in CMS config')
  }

  const fields = caseStudyCollection.fields

  return markdownFiles.map(({ data }) => {
    if (!validateFrontMatter(data, fields)) {
      throw new Error(
        `The markdown file for slug '${data.slug}' does not have the correct front matter structure.`
      )
    }

    return {
      title: data.title,
      slug: data.slug,
      createdOn: data['created-on'],
      updatedOn: data['updated-on'],
      publishedOn: data['published-on'],
      featured: data.featured,
      description: data.description,
      cta: {
        url: data.cta.url,
        text: data.cta.text,
      },
      image: {
        url: data.image.url,
        alt: data.image.alt,
      },
      metadata: data.metadata,
    }
  })
}
