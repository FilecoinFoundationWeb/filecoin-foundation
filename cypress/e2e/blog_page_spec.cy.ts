import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Blog Page', function () {
  it('should check metadata for the blog page', function () {
    testPageMetadata({
      path: PATHS.BLOG,
      hasPageHeaderDescription: true,
    })
  })
  it('should check links for the blog page', function () {
    verifyLinks(PATHS.BLOG.path)
  })
})
