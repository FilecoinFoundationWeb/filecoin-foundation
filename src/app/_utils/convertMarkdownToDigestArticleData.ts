import removeMarkdown from 'remove-markdown'

import { DigestArticleFrontMatterSchema } from '@/schemas/DigestArticleFrontMatterSchema'

const CONTENT_PREVIEW_CHARACTER_LENGTH = 220

export function convertMarkdownToDigestArticleData(data: Record<string, any>) {
  const parsedData = parseDigestArticleData(data)
  const description = generatePreviewDescription(data.content)

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
    authors: mapAuthors(data.authors),
    content: data.content,
    image: data.image,
    seo: data.seo,
  })
}

function mapAuthors(authors: Array<Record<string, any>>) {
  return authors?.map(mapAuthor)
}

function mapAuthor(author: Record<string, any>) {
  return {
    firstName: author['first-name'],
    lastName: author['last-name'],
    image: author.image ? mapAuthorImage(author.image) : undefined,
    company: author['company'],
  }
}

function mapAuthorImage(image: Record<string, any>) {
  return {
    src: image.src,
  }
}

function generatePreviewDescription(content: string) {
  const markdownFreeContent = removeMarkdown(content)
  const formattedContent = markdownFreeContent.substring(
    0,
    CONTENT_PREVIEW_CHARACTER_LENGTH,
  )
  return cleanText(formattedContent)
}

function cleanText(text: string) {
  return text
    .replace(/\n+/g, ' ') // Replace newlines with a single space
    .replace(/\s+/g, ' ') // Normalize multiple spaces
    .trim()
}
