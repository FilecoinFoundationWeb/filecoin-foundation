import type { AllowedImageFormats } from './fileUtils'

export type MarkdownTemplateParams = {
  encryptedName: string
  encryptedEmail: string
  projectName: string
  imagePath: `${string}.${AllowedImageFormats}`
  category: string
  subcategories: Array<string>
  tech: Array<string>
  shortDescription: string
  longDescription: string
  yearJoined: string
  websiteUrl: string
  youtubeUrl?: string
  githubUrl?: string
  xUrl?: string
  createdOn: string
  updatedOn: string
  publishedOn: string
}

export function getMarkdownTemplate(data: MarkdownTemplateParams) {
  return `---
${renderValue('title', data.projectName)}
${renderValue('created-on', data.createdOn)}
${renderValue('updated-on', data.updatedOn)}
${renderValue('published-on', data.publishedOn)}
${renderValue('email', data.encryptedEmail)}
${renderValue('full-name', data.encryptedName)}
image:
  ${renderValue('src', data.imagePath)}
${renderValue('category', data.category)}
${renderArray('subcategories', data.subcategories)}
${renderValue('description', data.shortDescription)}
${renderValue('website', data.websiteUrl)}
${renderArray('tech', data.tech)}
${renderValue('year-joined', data.yearJoined)}
${renderOptionalValues({
  repo: data.githubUrl,
  'video-url': data.youtubeUrl,
  twitter: data.xUrl,
})}
seo:
  ${renderValue('title', data.projectName)}
  ${renderValue('description', data.shortDescription)}
---

${data.longDescription.trim()}
`
}

type OptionalValues = {
  repo: MarkdownTemplateParams['githubUrl']
  'video-url': MarkdownTemplateParams['youtubeUrl']
  twitter: MarkdownTemplateParams['xUrl']
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

function renderValue(key: string, value: string) {
  return `${key}: ${value.trim()}`
}

function renderArray(key: string, array: Array<string>) {
  if (array.length === 0) return ''
  return `${key}:\n${array.map((item) => `  - ${item.trim()}`).join('\n')}`
}
