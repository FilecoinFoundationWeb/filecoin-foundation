import { PATHS } from '../../../src/app/_constants/paths'
import { testPageMetadata } from '../../support/test-utils'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('Ecosystem Explorer Page Page', function () {
  it('should check metadata and links of ecosystem explorer page', function () {
    testPageMetadata({
      path: PATHS.ECOSYSTEM_EXPLORER,
      hasPageHeaderDescription: true,
    })
    verifyLinks(PATHS.ECOSYSTEM_EXPLORER.path)
  })
})
