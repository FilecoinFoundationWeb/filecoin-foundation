import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Governance Page', function () {
  it('should check metadata for the governance page', function () {
    testPageMetadata({
      path: PATHS.GOVERNANCE,
      hasPageHeaderDescription: true,
    })
  })
  it('should check links for the governance page', function () {
    verifyLinks(PATHS.GOVERNANCE.path)
  })
})
