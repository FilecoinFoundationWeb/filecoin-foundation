import type { EcosystemProject } from '@/ecosystem-explorer/types/ecosystemProjectType'

export type MarkdownTemplateParams = {
  encryptedName: EcosystemProject['fullName']
  encryptedEmail: EcosystemProject['email']
  projectName: EcosystemProject['title']
  imagePath: NonNullable<EcosystemProject['image']>['src']
  category: EcosystemProject['category']
  subcategories: NonNullable<EcosystemProject['subcategories']>
  tech: EcosystemProject['tech']
  shortDescription: EcosystemProject['description']
  longDescription: NonNullable<EcosystemProject['content']>
  yearJoined: NonNullable<EcosystemProject['yearJoined']>
  websiteUrl: NonNullable<EcosystemProject['website']>
  createdOn: EcosystemProject['createdOn']
  updatedOn: NonNullable<EcosystemProject['updatedOn']>
  publishedOn: NonNullable<EcosystemProject['publishedOn']>
  youtubeUrl: EcosystemProject['videoUrl']
  githubUrl: EcosystemProject['repo']
  xUrl: EcosystemProject['twitter']
}

type OptionalValues = {
  repo: MarkdownTemplateParams['githubUrl']
  'video-url': MarkdownTemplateParams['youtubeUrl']
  twitter: MarkdownTemplateParams['xUrl']
}

export function buildEcosystemMarkdownTemplate(data: MarkdownTemplateParams) {
  const cleanDescription = stripLineBreaks(data.shortDescription)

  return `---
${renderValue('title', data.projectName)}
${renderValue('created-on', data.createdOn.toISOString())}
${renderValue('updated-on', data.updatedOn.toISOString())}
${renderValue('published-on', data.publishedOn.toISOString())}
${renderValue('email', data.encryptedEmail)}
${renderValue('full-name', data.encryptedName)}
image:
  ${renderValue('src', data.imagePath)}
${renderValue('category', data.category)}
${renderArray('subcategories', data.subcategories)}
${renderValue('description', cleanDescription)}
${renderValue('website', data.websiteUrl)}
${renderArray('tech', data.tech)}
${renderValue('year-joined', data.yearJoined.toISOString())}
${renderOptionalValues({
  repo: data.githubUrl,
  'video-url': data.youtubeUrl,
  twitter: data.xUrl,
})}
seo:
  ${renderValue('title', data.projectName)}
  ${renderValue('description', cleanDescription)}
---

${data.longDescription.trim()}
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
