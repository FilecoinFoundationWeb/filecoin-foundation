import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Governance Page', function () {
  it('should check metadata and links of governance page', function () {
    testPageMetadata({
      path: PATHS.GOVERNANCE,
      hasPageHeaderDescription: true,
    })
    verifyLinks(PATHS.GOVERNANCE.path)
  })
})
