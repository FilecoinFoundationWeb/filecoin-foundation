import { PATHS } from '@/constants/paths'

import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadata } from '@/support/verifyMetadataUtil'

describe('Random Digest Article', () => {
  it('should check metadata', () => {
    const digestDirectoryPath = PATHS.DIGEST.entriesContentPath as string

    getRandomSlug(digestDirectoryPath).then((slug) => {
      verifyMetadata(digestDirectoryPath, `${PATHS.DIGEST.path}/${slug}`, slug)
    })
  })
})
