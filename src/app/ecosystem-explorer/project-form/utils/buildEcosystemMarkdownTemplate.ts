import type { EcosystemProject } from '@/ecosystem-explorer/types/ecosystemProjectType'

export type MarkdownTemplateParams = {
  fullName: EcosystemProject['fullName']
  email: EcosystemProject['email']
  title: EcosystemProject['title']
  image: NonNullable<EcosystemProject['image']>
  category: EcosystemProject['category']
  subcategories: NonNullable<EcosystemProject['subcategories']>
  tech: EcosystemProject['tech']
  description: EcosystemProject['description']
  content: NonNullable<EcosystemProject['content']>
  yearJoined: NonNullable<EcosystemProject['yearJoined']>
  website: NonNullable<EcosystemProject['website']>
  createdOn: EcosystemProject['createdOn']
  updatedOn: NonNullable<EcosystemProject['updatedOn']>
  publishedOn: NonNullable<EcosystemProject['publishedOn']>
  // Optional values
  videoUrl?: EcosystemProject['videoUrl']
  repo?: EcosystemProject['repo']
  twitter?: EcosystemProject['twitter']
  featuredContent?: EcosystemProject['featuredContent']
}

type OptionalValues = {
  repo: MarkdownTemplateParams['repo']
  'video-url': MarkdownTemplateParams['videoUrl']
  twitter: MarkdownTemplateParams['twitter']
  'featured-content': MarkdownTemplateParams['featuredContent']
}

export function buildEcosystemMarkdownTemplate(data: MarkdownTemplateParams) {
  const cleanDescription = stripLineBreaks(data.description)

  return `---
${renderValue('title', data.title)}
${renderValue('created-on', data.createdOn.toISOString())}
${renderValue('updated-on', data.updatedOn.toISOString())}
${renderValue('published-on', data.publishedOn.toISOString())}
${renderValue('email', data.email)}
${renderValue('full-name', data.fullName)}
image:
  ${renderValue('src', data.image.src)}
${renderValue('category', data.category)}
${renderArray('subcategories', data.subcategories)}
${renderValue('description', cleanDescription)}
${renderValue('website', data.website)}
${renderArray('tech', data.tech)}
${renderValue('year-joined', data.yearJoined.toISOString())}
${renderOptionalValues({
  repo: data.repo,
  'video-url': data.videoUrl,
  twitter: data.twitter,
  'featured-content': data.featuredContent,
})}
seo:
  ${renderValue('title', data.title)}
  ${renderValue('description', cleanDescription)}
---

${data.content.trim()}
`
}

function renderValue(key: string, value: string) {
  return `${key}: ${value.trim()}`
}

function renderArray(key: string, array: Array<string>) {
  if (array.length === 0) return ''
  return `${key}:\n${array.map((item) => `  - ${item.trim()}`).join('\n')}`
}

function renderOptionalValues(values: OptionalValues) {
  const entries = Object.entries(values)
  const truthyValueEntries = entries.filter(([, value]) => Boolean(value))

  if (truthyValueEntries.length === 0) {
    return ''
  }

  return truthyValueEntries
    .map(([key, value]) => renderValue(key, value!))
    .join('\n')
}

function stripLineBreaks(value: string) {
  return value.replace(/(\r\n|\n|\r)+/g, ' ')
}
