import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Employee Privacy Policy Page', function () {
  testPageMetadata({
    path: PATHS.EMPLOYEE_PRIVACY_POLICY,
    hasPageHeaderDescription: false,
  })
})
