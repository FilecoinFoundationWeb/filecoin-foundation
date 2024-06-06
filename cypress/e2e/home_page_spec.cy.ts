import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Home Page', function () {
  testPageMetadata({ path: PATHS.HOME })
})
