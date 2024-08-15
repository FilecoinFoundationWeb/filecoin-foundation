import { PATHS } from '@/constants/paths'
import { testPageMetadata } from '@/support/test-utils'

describe('Security - Main Page', () => {
  testPageMetadata({ path: PATHS.SECURITY, overrideDefaultTitle: true })
})

describe('Security - Coordinated Disclosure Policy Page', () => {
  testPageMetadata({
    path: PATHS.COORDINATED_DISCLOSURE_POLICY,
    overrideDefaultTitle: true,
  })
})
