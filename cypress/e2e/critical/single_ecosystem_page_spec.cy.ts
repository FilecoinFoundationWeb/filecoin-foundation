import { PATHS } from '@/constants/paths'
import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadata } from '@/support/verifyMetadataUtil'

describe('Random Ecosystem Explorer Project', () => {
  it('should check metadata', () => {
    const ecosystemDirectoryPath = PATHS.ECOSYSTEM_EXPLORER
      .entriesContentPath as string

    getRandomSlug(ecosystemDirectoryPath).then((slug) => {
      verifyMetadata(
        ecosystemDirectoryPath,
        `${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`,
        slug,
      )
    })
  })
})
