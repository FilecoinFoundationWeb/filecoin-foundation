import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Employee Privacy Policy Page', function () {
  it('should check metadata for the employee privacy policy page', function () {
    testPageMetadata({
      path: PATHS.EMPLOYEE_PRIVACY_POLICY,
      hasPageHeaderDescription: false,
    })
  })
  it('should check links for the employee privacy policy page', function () {
    verifyLinks(PATHS.EMPLOYEE_PRIVACY_POLICY.path)
  })
})
