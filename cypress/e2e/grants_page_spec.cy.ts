import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'

describe('Grants Page', function () {
  testPageMetadata({ path: PATHS.GRANTS, overrideDefaultTitle: true })
})
