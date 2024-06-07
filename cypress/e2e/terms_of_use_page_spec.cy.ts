import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Terms of Use Page', function () {
  testPageMetadata({
    path: PATHS.TERMS_OF_USE,
    hasPageHeaderDescription: false,
  })
})
