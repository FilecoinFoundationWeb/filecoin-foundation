import {
  getDigestArticleData as sharedGetDigestArticleData,
  getDigestArticlesData as sharedGetDigestArticlesData,
} from '@filecoin-foundation/utils/getDigestArticleData'

import { PATHS } from '@/constants/paths'

export async function getDigestArticleData(slug: string) {
  return sharedGetDigestArticleData(slug, PATHS.DIGEST.articlesContentPath)
}

export async function getDigestArticlesData() {
  return sharedGetDigestArticlesData(PATHS.DIGEST.articlesContentPath)
}
