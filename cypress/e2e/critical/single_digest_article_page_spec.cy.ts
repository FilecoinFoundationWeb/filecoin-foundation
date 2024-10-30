import { PATHS } from '@/constants/paths'

import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Digest Article', () => {
  it('should check metadata', () => {
    const digestDirectoryPath = PATHS.DIGEST.entriesContentPath as string

    getRandomSlug(digestDirectoryPath).then((slug) => {
      const fullPath = `${digestDirectoryPath}/${slug}.md`
      const pagePath = `${PATHS.DIGEST.path}/${slug}`

      verifyMetadataForDynamicPages({
        fullPath,
        pagePath,
      })
    })
  })
})
