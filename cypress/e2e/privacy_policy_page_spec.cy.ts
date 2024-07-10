import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Privacy Policy Page', function () {
  it('should check metadata for the privacy policy page', function () {
    testPageMetadata({
      path: PATHS.PRIVACY_POLICY,
      hasPageHeaderDescription: false,
    })
  })
  it('should check links for the privacy policy page', function () {
    verifyLinks(PATHS.PRIVACY_POLICY.path)
  })
})
