import { PATHS } from '@/constants/paths'

import { testPageMetadata } from '@/support/test-utils'
import { verifyLinks } from '@/support/verifyLinksUtil'

describe('Security - Main Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.SECURITY, {
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.SECURITY.path)
  })

  it('should match visual snapshot', () => {
    cy.visit(PATHS.SECURITY.path)
    cy.percySnapshot()
  })
})

describe('Security - Bug Bounty Program Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.BUG_BOUNTY)
  })

  it('should check links', () => {
    verifyLinks(PATHS.BUG_BOUNTY.path)
  })

  it('should match visual snapshot', () => {
    cy.visit(PATHS.BUG_BOUNTY.path)
    cy.percySnapshot()
  })
})

describe('Security - Coordinated Disclosure Policy Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.COORDINATED_DISCLOSURE_POLICY, {
      overrideDefaultTitle: true,
    })
  })

  it('should check links', () => {
    verifyLinks(PATHS.COORDINATED_DISCLOSURE_POLICY.path)
  })

  it('should match visual snapshot', () => {
    cy.visit(PATHS.COORDINATED_DISCLOSURE_POLICY.path)
    cy.percySnapshot()
  })
})


describe('Security - Maturity Model Page', () => {
  it('should check metadata', () => {
    testPageMetadata(PATHS.MATURITY_MODEL)
  })

  it('should check links', () => {
    verifyLinks(PATHS.MATURITY_MODEL.path)
  })

  it('should match visual snapshot', () => {
    cy.visit(PATHS.MATURITY_MODEL.path)
    cy.percySnapshot()
  })
})
