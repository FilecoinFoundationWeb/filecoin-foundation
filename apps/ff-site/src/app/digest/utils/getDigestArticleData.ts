import {
  getDigestArticleData as sharedGetDigestArticleData,
  getDigestArticlesData as sharedGetDigestArticlesData,
} from '@filecoin-foundation/utils/getDigestArticleData'

import { PATHS } from '@/constants/paths'

const DIGEST_ARTICLES_DIRECTORY_PATH = PATHS.DIGEST.articlesPath
console.log({ DIGEST_ARTICLES_DIRECTORY_PATH })

export async function getDigestArticleData(slug: string) {
  return sharedGetDigestArticleData(slug, DIGEST_ARTICLES_DIRECTORY_PATH)
}

export async function getDigestArticlesData() {
  return sharedGetDigestArticlesData(DIGEST_ARTICLES_DIRECTORY_PATH)
}
