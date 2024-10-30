import { PATHS } from '@/constants/paths'

import { METADATA_TITLE_SUFFIX } from '@/ecosystem-explorer/constants/metadata'
import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Ecosystem Explorer Project', () => {
  it('should check metadata', () => {
    const ecosystemDirectoryPath = PATHS.ECOSYSTEM_EXPLORER
      .entriesContentPath as string

    getRandomSlug(ecosystemDirectoryPath).then((slug) => {
      const fullPath = `${ecosystemDirectoryPath}/${slug}.md`
      const pagePath = `${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`

      verifyMetadataForDynamicPages({
        fullPath,
        pagePath,
        seoTitleSuffix: METADATA_TITLE_SUFFIX,
      })
    })
  })
})
