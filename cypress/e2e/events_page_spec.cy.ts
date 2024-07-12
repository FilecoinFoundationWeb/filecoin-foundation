import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Events Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.EVENTS,
      hasPageHeaderDescription: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.EVENTS.path)
  })
})
