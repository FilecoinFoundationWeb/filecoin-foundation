import { PATHS } from '@/constants/paths'
import { testPageMetadata } from '@/support/test-utils'

describe('Security - Main Page', () => {
  testPageMetadata(PATHS.SECURITY, {
    overrideDefaultTitle: true,
  })
})

describe('Security - Coordinated Disclosure Policy Page', () => {
  testPageMetadata(PATHS.COORDINATED_DISCLOSURE_POLICY, {
    overrideDefaultTitle: true,
  })
})

describe('Security - Bug Bounty Program Page', () => {
  testPageMetadata(PATHS.BUG_BOUNTY, {
    overrideDefaultTitle: true,
  })
})
