import { PATHS } from '@/constants/paths'
import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Privacy Policy Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.PRIVACY_POLICY,
      hasPageHeaderDescription: false,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.PRIVACY_POLICY.path)
  })
})
