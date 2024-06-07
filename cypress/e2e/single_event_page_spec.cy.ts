import { PATHS } from '../../src/app/_constants/paths'
import { verifyMetadata } from '../support/verifyMetadataUtil'

describe('Single Specific Events Page', function () {
  it('should check metadata of the specific events page', function () {
    const slug = 'fil-brussels'
    verifyMetadata(
      PATHS.EVENTS.entriesContentPath as string,
      `${PATHS.EVENTS.path}/${slug}`,
      slug,
    )
  })
})
