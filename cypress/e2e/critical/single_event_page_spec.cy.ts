import { PATHS } from '@/constants/paths'

import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadata } from '@/support/verifyMetadataUtil'

describe('Random Event Entry', () => {
  it('should check metadata', () => {
    const eventsDirectoryPath = PATHS.EVENTS.entriesContentPath as string

    getRandomSlug(eventsDirectoryPath).then((slug) => {
      verifyMetadata(eventsDirectoryPath, `${PATHS.EVENTS.path}/${slug}`, slug)
    })
  })
})
