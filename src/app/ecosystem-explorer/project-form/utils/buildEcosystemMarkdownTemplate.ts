import type { EcosystemProject } from '@/ecosystem-explorer/types/ecosystemProjectType'

type Tech = EcosystemProject['tech'][number]

export type MarkdownTemplateParams = {
  fullName: EcosystemProject['fullName']
  email: EcosystemProject['email']
  title: EcosystemProject['title']
  image: NonNullable<EcosystemProject['image']>
  category: EcosystemProject['category']
  subcategory: EcosystemProject['subcategory']
  tech: Array<Tech>
  description: EcosystemProject['description']
  content: NonNullable<EcosystemProject['content']>
  yearJoined: NonNullable<EcosystemProject['yearJoined']>
  website: NonNullable<EcosystemProject['website']>
  createdOn: EcosystemProject['createdOn']
  updatedOn: NonNullable<EcosystemProject['updatedOn']>
  publishedOn: NonNullable<EcosystemProject['publishedOn']>
  videoUrl?: EcosystemProject['videoUrl']
  repo?: EcosystemProject['repo']
  twitter?: EcosystemProject['twitter']
}

export function buildEcosystemMarkdownTemplate(data: MarkdownTemplateParams) {
  const cleanDescription = stripLineBreaks(data.description)

  return `---
${renderLine('title', data.title)}
${renderLine('created-on', data.createdOn.toISOString())}
${renderLine('updated-on', data.updatedOn.toISOString())}
${renderLine('published-on', data.publishedOn.toISOString())}
${renderLine('email', data.email)}
${renderLine('full-name', data.fullName)}
image:
  ${renderLine('src', data.image.src)}
${renderLine('category', data.category)}
${renderLine('subcategory', data.subcategory)}
${renderArray('tech', data.tech)}
${renderLine('description', cleanDescription)}
${renderLine('website', data.website)}
${renderLine('year-joined', data.yearJoined.toISOString())}
${renderOptionalLine('repo', data.repo)}
${renderOptionalLine('video-url', data.videoUrl)}
${renderOptionalLine('twitter', data.twitter)}
seo:
  ${renderLine('title', data.title)}
  ${renderLine('description', cleanDescription)}
---

${data.content.trim()}
`
}

function renderLine(key: string, value: string) {
  return `${key}: ${value.trim()}`
}

function renderOptionalLine(key: string, value: string | undefined) {
  if (!value) return ''
  return renderLine(key, value)
}

function renderArray(key: string, array: Array<string>) {
  if (array.length === 0) return ''
  return `${key}:\n${array.map((item) => `  - ${item.trim()}`).join('\n')}`
}

function stripLineBreaks(value: string) {
  return value.replace(/(\r\n|\n|\r)+/g, ' ')
}
