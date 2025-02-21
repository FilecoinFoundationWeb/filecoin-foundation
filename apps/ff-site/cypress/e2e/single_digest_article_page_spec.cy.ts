import { PATHS } from '@/constants/paths'

import { generateDynamicPaths } from '@/support/generateDynamicPathsUtil'
import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Digest Article', () => {
  it('should check metadata', () => {
    const DIGEST_BASE_PATHS = PATHS.DIGEST

    getRandomSlug(DIGEST_BASE_PATHS.entriesContentPath as string).then(
      (slug) => {
        const { contentFilePath, pageUrl } = generateDynamicPaths(
          DIGEST_BASE_PATHS,
          slug,
        )

        verifyMetadataForDynamicPages({
          contentFilePath,
          urlPath: pageUrl,
        })
      },
    )
  })
})
