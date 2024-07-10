import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Grants Page', function () {
  it('should check metadata for the grants page', function () {
    testPageMetadata({
      path: PATHS.GRANTS,
      hasPageHeaderDescription: true,
    })
  })
  it('should check links for the grants page', function () {
    verifyLinks(PATHS.GRANTS.path)
  })
})
