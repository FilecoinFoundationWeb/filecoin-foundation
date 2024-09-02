import { PATHS } from '@/constants/paths'

import { convertMarkdownToDigestArticleData } from '@/utils/convertMarkdownToDigestArticleData'
import { getData, getAllData } from '@/utils/getData'

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
