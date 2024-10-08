import { PATHS } from '@/constants/paths'

import { convertMarkdownToDigestArticleData } from '@/utils/convertMarkdownToDigestArticleData'
import { getAllData, getData } from '@/utils/getData'

import { sortArticlesByNumber } from '@/digest/utils/sortArticlesByNumber'

const DIGEST_DIRECTORY_PATH = PATHS.DIGEST.entriesContentPath as string

export function getDigestArticleData(slug: string) {
  return getData(
    DIGEST_DIRECTORY_PATH,
    convertMarkdownToDigestArticleData,
    slug,
  )
}

export function getDigestArticlesData() {
  return getAllData(DIGEST_DIRECTORY_PATH, convertMarkdownToDigestArticleData)
}

export function getDigestArticlesDataSortedByNumber() {
  return getDigestArticlesData().sort(sortArticlesByNumber)
}
