import { PATHS } from '@/constants/paths'

import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Orbit Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.ORBIT, {
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.ORBIT.path)
  })

  it('should match visual snapshot', () => {
    cy.visit(PATHS.ORBIT.path)
    cy.percySnapshot()
  })
})
