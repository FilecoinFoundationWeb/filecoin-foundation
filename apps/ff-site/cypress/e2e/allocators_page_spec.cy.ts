import { PATHS } from '@/constants/paths'

import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Allocators Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.ALLOCATORS, {
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.ALLOCATORS.path)
  })

  it('should match visual snapshot', () => {
    cy.visit(PATHS.ALLOCATORS.path)
    cy.percySnapshot()
  })
})
