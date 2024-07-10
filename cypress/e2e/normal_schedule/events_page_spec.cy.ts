import { PATHS } from '../../../src/app/_constants/paths'
import { testPageMetadata } from '../../support/test-utils'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('Events Page', function () {
  it('should check metadata and links of events page', function () {
    testPageMetadata({
      path: PATHS.EVENTS,
      hasPageHeaderDescription: true,
    })
    verifyLinks(PATHS.EVENTS.path)
  })
})
