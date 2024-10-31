import { PATHS } from '@/constants/paths'

import { METADATA_TITLE_SUFFIX } from '@/events/constants/metadata'
import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Event Entry', () => {
  it('should check metadata', () => {
    const EVENTS_CONTENT_PATH = PATHS.EVENTS.entriesContentPath as string
    const EVENTS_BASE_URL = PATHS.EVENTS.path

    getRandomSlug(EVENTS_CONTENT_PATH).then((slug) => {
      const ENTRY_FILE_PATH = `${EVENTS_CONTENT_PATH}/${slug}.md`
      const PAGE_URL = `${EVENTS_BASE_URL}/${slug}`

      verifyMetadataForDynamicPages({
        contentFilePath: ENTRY_FILE_PATH,
        urlPath: PAGE_URL,
        metadataTitleSuffix: METADATA_TITLE_SUFFIX,
      })
    })
  })
})
