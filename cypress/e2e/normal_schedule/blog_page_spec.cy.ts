import { PATHS } from '../../../src/app/_constants/paths'
import { testPageMetadata } from '../../support/test-utils'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('Blog Page', function () {
  it('should check metadata and links of blog page', function () {
    testPageMetadata({
      path: PATHS.BLOG,
      hasPageHeaderDescription: true,
    })
    verifyLinks(PATHS.BLOG.path)
  })
})
