import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Events Page', function () {
  testPageMetadata({ path: PATHS.EVENTS, includesFeaturedEntry: true })
})
