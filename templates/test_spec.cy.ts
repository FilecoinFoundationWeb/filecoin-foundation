`import { PATHS } from '@/constants/paths'

import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('__PAGE_NAME_START_CASE__ Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.__PATH_NAME__)
  })

  it('should check links', () => {
    verifyLinks(PATHS.__PATH_NAME__.path)
  })
});`
