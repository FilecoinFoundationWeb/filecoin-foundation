import { PATHS } from '@/constants/paths'

import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('About Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.ABOUT, {
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.ABOUT.path)
  })

  it('should match visual snapshot', () => {
    cy.visit(PATHS.ABOUT.path)
    cy.percySnapshot()
  })
})
