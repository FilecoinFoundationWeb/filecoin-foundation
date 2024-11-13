import { PATHS } from '@/constants/paths'

import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Terms of Use Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.TERMS_OF_USE, {
      hasPageHeaderDescription: false,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.TERMS_OF_USE.path)
  })
})
