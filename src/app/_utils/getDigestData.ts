import { DigestData } from '@/types/digestTypes'

import { mapMarkdownToDigestData } from '@/utils/mapMarkdownToDigestData'
import { transformMarkdownToCollectionData } from '@/utils/transformMarkdownToCollectionData'
import { transformMarkdownToItemData } from '@/utils/transformMarkdownToItemData'

import { PATHS } from '@/constants/paths'

const DIGEST_COLLECTION_NAME = 'digest'
const DIGEST_DIRECTORY_PATH = PATHS.DIGEST.entriesContentPath as string

export function getDigestData(slug: string): DigestData {
  return transformMarkdownToItemData<DigestData>(
    DIGEST_DIRECTORY_PATH,
    DIGEST_COLLECTION_NAME,
    slug,
    mapMarkdownToDigestData,
  )
}

export function getDigestsData(): DigestData[] {
  return transformMarkdownToCollectionData<DigestData>(
    DIGEST_DIRECTORY_PATH,
    DIGEST_COLLECTION_NAME,
    mapMarkdownToDigestData,
  )
}
