import { PATHS } from '@/constants/paths'
import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Maturity Model Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.MATURITY_MODEL)
  })

  it('should check links', () => {
    verifyLinks(PATHS.MATURITY_MODEL.path)
  })
});
