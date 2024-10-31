import { PATHS } from '@/constants/paths'

import { METADATA_TITLE_SUFFIX } from '@/ecosystem-explorer/constants/metadata'
import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Ecosystem Explorer Project', () => {
  it('should check metadata', () => {
    const ECOSYSTEM_CONTENT_PATH = PATHS.ECOSYSTEM_EXPLORER
      .entriesContentPath as string
    const ECOSYSTEM_BASE_URL = PATHS.ECOSYSTEM_EXPLORER.path

    getRandomSlug(ECOSYSTEM_CONTENT_PATH).then((slug) => {
      const ENTRY_FILE_PATH = `${ECOSYSTEM_CONTENT_PATH}/${slug}.md`
      const PAGE_URL = `${ECOSYSTEM_BASE_URL}/${slug}`

      verifyMetadataForDynamicPages({
        contentFilePath: ENTRY_FILE_PATH,
        urlPath: PAGE_URL,
        metadataTitleSuffix: METADATA_TITLE_SUFFIX,
      })
    })
  })
})
