import { PATHS } from '../../src/app/_constants/paths'
import { verifyMetadata } from '../support/verifyMetadataUtil'

describe('Single Specific Ecosystem Page', function () {
  it('should check metadata of the specific ecosystem page', function () {
    const slug = 'filecoin-foundation'
    verifyMetadata(
      PATHS.ECOSYSTEM.entriesContentPath as string,
      `${PATHS.ECOSYSTEM.path}/${slug}`,
      slug,
    )
  })
})
