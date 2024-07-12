import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('About Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.ABOUT,
      hasPageHeaderDescription: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.ABOUT.path)
  })
})
