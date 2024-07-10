import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Ecosystem Explorer Page Page', function () {
  it('should check metadata for the ecosystem explorer page', function () {
    testPageMetadata({
      path: PATHS.ECOSYSTEM_EXPLORER,
      hasPageHeaderDescription: true,
    })
  })
  it('should check links for the ecosystem explorer page', function () {
    verifyLinks(PATHS.ECOSYSTEM_EXPLORER.path)
  })
})
