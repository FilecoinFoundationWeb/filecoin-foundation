import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Terms of Use Page', function () {
  it('should check metadata for the terms of use page', function () {
    testPageMetadata({
      path: PATHS.TERMS_OF_USE,
      hasPageHeaderDescription: false,
    })
  })

  it('should check links for the terms of use page', function () {
    verifyLinks(PATHS.TERMS_OF_USE.path)
  })
})
