import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Privacy Policy Page', function () {
  testPageMetadata({
    path: PATHS.PRIVACY_POLICY,
    hasPageHeaderDescription: false,
  })
})
