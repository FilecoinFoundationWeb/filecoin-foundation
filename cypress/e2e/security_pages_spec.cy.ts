import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Security - Main Page', () => {
  testPageMetadata({ path: PATHS.SECURITY, useAbsoluteTitle: true })
})

describe('Security - Coordinated Disclosure Policy Page', () => {
  testPageMetadata({
    path: PATHS.COORDINATED_DISCLOSURE_POLICY,
  })
})
