import { PATHS } from '../../../src/app/_constants/paths'
import { testPageMetadata } from '../../support/test-utils'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('Privacy Policy Page', function () {
  it('should check metadata and links of privacy policy page', function () {
    testPageMetadata({
      path: PATHS.PRIVACY_POLICY,
      hasPageHeaderDescription: false,
    })
    verifyLinks(PATHS.PRIVACY_POLICY.path)
  })
})
