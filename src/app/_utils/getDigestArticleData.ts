import removeMarkdown from 'remove-markdown'

import { PATHS } from '@/constants/paths'

import { getAllMarkdownData, getMarkdownData } from '@/utils/getMarkdownData'

import { DigestArticleFrontMatterSchema } from '@/schemas/DigestArticleFrontMatterSchema'

import { sortArticlesByNumber } from '@/digest/utils/sortArticlesByNumber'

const DIGEST_DIRECTORY_PATH = PATHS.DIGEST.entriesContentPath as string
const CONTENT_PREVIEW_CHARACTER_LENGTH = 220

export function getDigestArticleData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: DIGEST_DIRECTORY_PATH,
    zodParser: DigestArticleFrontMatterSchema.parse,
  })
}

export function getAllDigestArticleData() {
  const articles = getAllMarkdownData({
    directoryPath: DIGEST_DIRECTORY_PATH,
    zodParser: DigestArticleFrontMatterSchema.parse,
  })

  return articles.map((article) => ({
    ...article,
    description: generatePreviewDescription(article.content),
  }))
}

export function getAllDigestArticleDataSortedByNumber() {
  return getAllDigestArticleData().sort(sortArticlesByNumber)
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
