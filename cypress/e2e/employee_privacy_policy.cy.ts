import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Employee Privacy Policy Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.EMPLOYEE_PRIVACY_POLICY,
      hasPageHeaderDescription: false,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.EMPLOYEE_PRIVACY_POLICY.path)
  })
})
