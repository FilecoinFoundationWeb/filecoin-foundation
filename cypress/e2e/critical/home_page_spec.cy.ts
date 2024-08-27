import { PATHS } from '@/constants/paths'
import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Homepage', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.HOME, {
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.HOME.path)
  })
})
