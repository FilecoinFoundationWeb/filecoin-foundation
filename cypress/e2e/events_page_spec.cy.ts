import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Events Page', function () {
  it('should check metadata for the events page', function () {
    testPageMetadata({
      path: PATHS.EVENTS,
      hasPageHeaderDescription: true,
    })
  })
  it('should check links for the events page', function () {
    verifyLinks(PATHS.EVENTS.path)
  })
})
