import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Terms Page', function () {
  testPageMetadata(PATHS.TERMS, false, false)
})
