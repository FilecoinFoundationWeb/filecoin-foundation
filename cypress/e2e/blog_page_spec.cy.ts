import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Blog Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.BLOG,
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.BLOG.path)
  })
})
