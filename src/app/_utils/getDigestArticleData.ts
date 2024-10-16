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
  const truncatedContent = truncateText(
    content,
    CONTENT_PREVIEW_CHARACTER_LENGTH,
  )
  const plainText = removeMarkdown(truncatedContent)
  return cleanAndTrim(plainText)
}

function truncateText(text: string, maxLength: number) {
  return text.substring(0, maxLength)
}

function cleanAndTrim(text: string) {
  return text.replace(/\s+/g, ' ').trim()
}
