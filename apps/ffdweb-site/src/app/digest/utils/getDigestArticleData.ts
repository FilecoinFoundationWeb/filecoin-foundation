import {
  getDigestArticleData as sharedGetDigestArticleData,
  getDigestArticlesData as sharedGetDigestArticlesData,
} from '@filecoin-foundation/utils/getDigestArticleData'

import { PATHS } from '@/constants/paths'

const DIGEST_DIRECTORY_ARTICLES_PATH = PATHS.DIGEST.articlesPath

export async function getDigestArticleData(slug: string) {
  return sharedGetDigestArticleData(slug, DIGEST_DIRECTORY_ARTICLES_PATH)
}

export async function getDigestArticlesData() {
  return sharedGetDigestArticlesData(DIGEST_DIRECTORY_ARTICLES_PATH)
}
