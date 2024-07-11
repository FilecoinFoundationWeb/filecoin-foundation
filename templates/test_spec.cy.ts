;`import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('__PAGE_NAME_START_CASE__ Page', function () {
  it('should check metadata for the __PAGE_NAME_LOWER_CASE__ page', function () {
    testPageMetadata({
      path: PATHS.__PATH_NAME__
    })
  })
  it('should check links for the __PAGE_NAME_LOWER_CASE__ page', function () {
    verifyLinks(PATHS.__PATH_NAME__.path)
  })
});`
