import { verifyCanonicalLink } from '../../cypress/support/canonicalLinkUtil'
import { PATHS } from '../../src/app/_constants/paths'

describe('Single Ecosystem Page', function () {
  it('should check metadata of the first event', function () {
    cy.visit(PATHS.ECOSYSTEM.path)

    cy.get(`a[href*="${PATHS.ECOSYSTEM.path}"]`)
      .first()
      .invoke('attr', 'href')
      .then((href) => {
        if (typeof href === 'string') {
          cy.visit(href)

          verifyCanonicalLink(href)
        } else {
          cy.log('External URL or unexpected path, skipping metadata check')
        }
      })
  })
})
