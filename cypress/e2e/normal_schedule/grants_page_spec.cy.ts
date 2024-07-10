import { PATHS } from '../../../src/app/_constants/paths'
import { testPageMetadata } from '../../support/test-utils'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('Grants Page', function () {
  it('should check metadata and links of grants page', function () {
    testPageMetadata({
      path: PATHS.GRANTS,
      hasPageHeaderDescription: true,
    })
    verifyLinks(PATHS.GRANTS.path)
  })
})
