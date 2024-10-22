import removeMarkdown from 'remove-markdown'

import { PATHS } from '@/constants/paths'

import { getAllMarkdownData, getMarkdownData } from '@/utils/getMarkdownData'

import { DigestArticleFrontMatterSchema } from '../schemas/FrontMatterSchema'
import { sortArticlesByNumber } from '../utils/sortArticlesByNumber'

const DIGEST_DIRECTORY_PATH = PATHS.DIGEST.entriesContentPath as string

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
    description: removeMarkdown(article.content),
  }))
}

export function getAllDigestArticleDataSortedByNumber() {
  return getAllDigestArticleData().sort(sortArticlesByNumber)
}
