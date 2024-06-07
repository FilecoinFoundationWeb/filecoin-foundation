import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Governance Page', function () {
  testPageMetadata({ path: PATHS.GOVERNANCE, useAbsoluteTitle: true})
})
