import { PATHS } from '../../src/app/_constants/paths'
import { verifyMetadata } from '../support/verifyMetadataUtil'

describe('Single Specific Blog Post Page', function () {
  it('should check metadata of the specific blog post', function () {
    const slug =
      'driving-widespread-filecoin-adoption-key-initiatives-and-community-involvement-in-2024'
    verifyMetadata(
      PATHS.BLOG.entriesContentPath as string,
      `${PATHS.BLOG.path}/${slug}`,
      slug,
    )
  })
})
