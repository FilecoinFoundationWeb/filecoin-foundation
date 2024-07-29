import { PATHS } from '@/constants/paths'
import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Governance Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.GOVERNANCE,
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.GOVERNANCE.path)
  })
})
