import { PATHS } from '@/constants/paths'

import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Allocators Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.ALLOCATORS)
  })

  it('should check links', () => {
    verifyLinks(PATHS.ALLOCATORS.path)
  })
});
