import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Blog Page', function () {
  testPageMetadata(PATHS.BLOG, true)
})
