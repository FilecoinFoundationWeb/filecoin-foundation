import { PATHS } from '../../../src/app/_constants/paths'
import { testPageMetadata } from '../../support/test-utils'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('Terms of Use Page', function () {
  it('should check metadata and links of the terms of use page', function () {
    testPageMetadata({
      path: PATHS.TERMS_OF_USE,
      hasPageHeaderDescription: false,
    })
    verifyLinks(PATHS.TERMS_OF_USE.path)
  })
})
