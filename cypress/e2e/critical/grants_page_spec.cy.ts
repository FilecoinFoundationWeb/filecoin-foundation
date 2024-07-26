import { PATHS } from '@/constants/paths'
import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Grants Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.GRANTS,
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.GRANTS.path)
  })
})
