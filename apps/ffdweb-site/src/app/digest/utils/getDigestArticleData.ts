import { getDigestArticleData as sharedGetDigestArticleData } from '@filecoin-foundation/utils/getDigestArticleData'
import { getDigestArticlesData as sharedGetDigestArticlesData } from '@filecoin-foundation/utils/getDigestArticleData'

import { PATHS } from '@/constants/paths'

const DIGEST_DIRECTORY_PATH = PATHS.DIGEST.entriesContentPath as string

export async function getDigestArticleData(slug: string) {
  return sharedGetDigestArticleData(slug, DIGEST_DIRECTORY_PATH)
}

export async function getDigestArticlesData() {
  return sharedGetDigestArticlesData(DIGEST_DIRECTORY_PATH)
}
