// Could re-use the value coming from the new Zod schema once merged?
export type MarkdownTemplateParams = {
  encryptedName: string
  encryptedEmail: string
  projectName: string
  imagePath: string
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

type OptionalValues = {
  repo: MarkdownTemplateParams['githubUrl']
  'video-url': MarkdownTemplateParams['youtubeUrl']
  twitter: MarkdownTemplateParams['xUrl']
}

export function getEcosystemMarkdownTemplate(data: MarkdownTemplateParams) {
  const cleanDescription = stripLineBreaks(data.shortDescription)

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
${renderValue('description', cleanDescription)}
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
