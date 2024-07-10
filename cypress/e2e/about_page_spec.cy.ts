import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('About Page', function () {
  it('should check metadata for the about page', function () {
    testPageMetadata({
      path: PATHS.ABOUT,
      hasPageHeaderDescription: true,
    })
  })
  it('should check links for the about page', function () {
    verifyLinks(PATHS.ABOUT.path)
  })
})
