import { PATHS } from '../../../src/app/_constants/paths'
import { getRandomSlug } from '../../support/getRandomSlugUtil'
import { verifyMetadata } from '../../support/verifyMetadataUtil'

describe('Random Ecosystem Page', function () {
  it('should check metadata of a random ecosystem page', function () {
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
