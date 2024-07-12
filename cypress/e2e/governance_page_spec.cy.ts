import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Governance Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.GOVERNANCE,
      hasPageHeaderDescription: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.GOVERNANCE.path)
  })
})
