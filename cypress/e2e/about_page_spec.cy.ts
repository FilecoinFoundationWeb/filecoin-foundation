import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('About Page', function () {
  testPageMetadata({ path: PATHS.ABOUT })
})
