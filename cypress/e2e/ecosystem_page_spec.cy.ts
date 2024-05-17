import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Ecosystem Page', function () {
  testPageMetadata(PATHS.ECOSYSTEM, true)
})
