import { PATHS } from '@/constants/paths'

import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('GovHub Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.GOVHUB, {
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.GOVHUB.path)
  })
})
