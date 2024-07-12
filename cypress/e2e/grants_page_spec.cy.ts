import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Grants Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.GRANTS,
      hasPageHeaderDescription: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.GRANTS.path)
  })
})
