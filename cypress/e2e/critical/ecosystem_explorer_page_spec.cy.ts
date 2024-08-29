import { PATHS } from '@/constants/paths'
import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Ecosystem Explorer Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.ECOSYSTEM_EXPLORER, {
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.ECOSYSTEM_EXPLORER.path)
  })
})
