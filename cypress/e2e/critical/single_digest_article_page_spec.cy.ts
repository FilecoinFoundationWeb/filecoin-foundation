import { PATHS } from '@/constants/paths'

import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Digest Article', () => {
  it('should check metadata', () => {
    const DIGEST_CONTENT_PATH = PATHS.DIGEST.entriesContentPath as string
    const DIGEST_BASE_URL = PATHS.DIGEST.path

    getRandomSlug(DIGEST_CONTENT_PATH).then((slug) => {
      const ENTRY_FILE_PATH = `${DIGEST_CONTENT_PATH}/${slug}.md`
      const PAGE_URL = `${DIGEST_BASE_URL}/${slug}`

      verifyMetadataForDynamicPages({
        contentFilePath: ENTRY_FILE_PATH,
        urlPath: PAGE_URL,
      })
    })
  })
})
