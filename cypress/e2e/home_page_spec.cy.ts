import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Home Page', function () {
  it('should check metadata for the home page', function () {
    testPageMetadata({
      path: PATHS.HOME,
      hasPageHeaderDescription: true,
    })
    verifyLinks(PATHS.HOME.path)
  })
  it('should check links for the home page', function () {
    testPageMetadata({
      path: PATHS.HOME,
      hasPageHeaderDescription: true,
    })
    verifyLinks(PATHS.HOME.path)
  })
})
