import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Homepage', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.HOME,
      hasPageHeaderDescription: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.HOME.path)
  })
})
