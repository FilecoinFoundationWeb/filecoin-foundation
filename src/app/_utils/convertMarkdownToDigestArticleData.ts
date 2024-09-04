import removeMarkdown from 'remove-markdown'

import { DigestArticleFrontMatterSchema } from '@/schemas/digestArticleFrontMatterSchema'

const CONTENT_PREVIEW_CHARACTER_LENGTH = 220

export function convertMarkdownToDigestArticleData(data: Record<string, any>) {
  const parsedData = parseDigestArticleData(data)
  const description = generateDescription(data.content)
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return {
    ...parsedData,
    description,
  }
}

function parseDigestArticleData(data: Record<string, any>) {
  return DigestArticleFrontMatterSchema.parse({
    title: data.title,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    issueNumber: data['issue-number'],
    articleNumber: data['article-number'],
    authors: data.authors?.map(mapAuthor),
    content: data.content,
    image: data.image,
    seo: data.seo,
  })
}

function mapAuthor(author: Record<string, any>) {
  return {
    firstName: author['first-name'],
    lastName: author['last-name'],
    image: author.image ? { src: author.image.src } : undefined,
    company: author['company'],
  }
}

function generateDescription(content: string) {
  return removeMarkdown(content).substring(0, CONTENT_PREVIEW_CHARACTER_LENGTH)
}
