import { PATHS } from '@/constants/paths'

import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Events Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.EVENTS, {
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.EVENTS.path)
  })

  it('should match visual snapshot', () => {
    cy.visit(PATHS.EVENTS.path)
    cy.percySnapshot()
  })
})
