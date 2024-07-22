import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Digest Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.DIGEST,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.DIGEST.path)
  })
})
