import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Ecosystem Explorer Page', function () {
  testPageMetadata({ path: PATHS.ECOSYSTEM_EXPLORER, useAbsoluteTitle: true })
})
