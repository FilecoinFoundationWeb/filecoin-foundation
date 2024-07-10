import { PATHS } from '../../../src/app/_constants/paths'
import { testPageMetadata } from '../../support/test-utils'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('About Page', function () {
  it('should check metadata and links of about page', function () {
    testPageMetadata({
      path: PATHS.ABOUT,
      hasPageHeaderDescription: true,
    })
    verifyLinks(PATHS.ABOUT.path)
  })
})
