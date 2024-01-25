import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Awards Page', function () {
  testPageMetadata(PATHS.PUBLIC_DATA_AWARDS, '/awards')
})
