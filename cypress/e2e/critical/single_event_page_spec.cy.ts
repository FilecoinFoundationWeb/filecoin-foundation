import { PATHS } from '@/constants/paths'

import { METADATA_TITLE_SUFFIX } from '@/events/constants/metadata'
import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Event Entry', () => {
  it('should check metadata', () => {
    const eventsDirectoryPath = PATHS.EVENTS.entriesContentPath as string

    getRandomSlug(eventsDirectoryPath).then((slug) => {
      const fullPath = `${eventsDirectoryPath}/${slug}.md`
      const pagePath = `${PATHS.EVENTS.path}/${slug}`

      verifyMetadataForDynamicPages({
        fullPath,
        pagePath,
        seoTitleSuffix: METADATA_TITLE_SUFFIX,
      })
    })
  })
})
