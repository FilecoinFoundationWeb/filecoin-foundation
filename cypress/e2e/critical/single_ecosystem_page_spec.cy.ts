import { PATHS } from '@/constants/paths'

import { METADATA_TITLE_SUFFIX } from '@/ecosystem-explorer/constants/metadata'
import { generateDynamicPaths } from '@/support/generateDynamicPathsUtil'
import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Ecosystem Explorer Project', () => {
  it('should check metadata', () => {
    const ECOSYSTEM_BASE_PATHS = PATHS.ECOSYSTEM_EXPLORER

    getRandomSlug(ECOSYSTEM_BASE_PATHS.entriesContentPath as string).then(
      (slug) => {
        const { contentFilePath, pageUrl } = generateDynamicPaths(
          ECOSYSTEM_BASE_PATHS,
          slug,
        )

        verifyMetadataForDynamicPages({
          contentFilePath,
          urlPath: pageUrl,
          metadataTitleSuffix: METADATA_TITLE_SUFFIX,
        })
      },
    )
  })
})
