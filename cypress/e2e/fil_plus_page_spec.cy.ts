import { PATHS } from '../../src/app/_constants/paths'
import { testPageMetadata } from '../support/test-utils'
import { verifyLinks } from '../support/verifyLinksUtil'

describe('Filecoin Plus Page', () => {
  it('should check metadata', () => {
    testPageMetadata({
      path: PATHS.FIL_PLUS,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.FIL_PLUS.path)
  })
})
