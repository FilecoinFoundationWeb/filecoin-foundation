import type { AllowedImageFormats } from './fileUtils'

export type GetMarkdownTemplateParams = {
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
  xHandle?: string
  createdOn: string
  updatedOn: string
  publishedOn: string
}

export function getMarkdownTemplate(data: GetMarkdownTemplateParams) {
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
${renderArray('tags', data.subcategories)}
${renderValue('description', data.shortDescription)}
${renderValue('website', data.websiteUrl)}
${renderArray('tech', data.tech)}
${renderValue('year-joined', data.yearJoined)}
${renderOptionalValues({ repo: data.githubUrl, 'video-url': data.youtubeUrl, twitter: data.xHandle })}
seo:
  ${renderValue('title', data.projectName)}
  ${renderValue('description', data.shortDescription)}
---

${data.longDescription.trim()}
`
}

type OptionalValues = {
  repo: GetMarkdownTemplateParams['githubUrl']
  'video-url': GetMarkdownTemplateParams['youtubeUrl']
  twitter: GetMarkdownTemplateParams['xHandle']
}

function renderOptionalValues(values: OptionalValues) {
  return Object.entries(values)
    .filter(([_, value]) => value)
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
