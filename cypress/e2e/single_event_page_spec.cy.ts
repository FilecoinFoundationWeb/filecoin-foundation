import { PATHS } from '../../src/app/_constants/paths'
import { BASE_URL } from '../../src/app/_constants/siteMetadata'

describe('Single Event Page', function () {
  it('should check metadata of the first event', function () {
    cy.visit(PATHS.EVENTS.path)

    cy.get(`a[href*="${PATHS.EVENTS.path}"]`)
      .first()
      .invoke('attr', 'href')
      .then((href) => {
        if (typeof href === 'string') {
          cy.visit(href)

          cy.get('link[rel="canonical"]')
            .should('exist')
            .should('have.attr', 'href', BASE_URL + href)
        } else {
          cy.log('External URL or unexpected path, skipping metadata check')
        }
      })
  })
})
