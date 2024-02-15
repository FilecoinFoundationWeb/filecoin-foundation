import { PATHS } from '../../src/app/_constants/paths'
import { BASE_URL } from '../../src/app/_constants/siteMetadata'

describe('Single Event Page', function () {
  it('should check metadata of the first event', function () {
    cy.visit(PATHS.EVENTS.path)

    cy.get(`a[href*="${PATHS.EVENTS.path}/"]`)
      .first()
      .invoke('attr', 'href')
      .then((href) => {
        if (typeof href === 'string') {
          cy.visit(href)

          const pagePath = href.replace(BASE_URL, '')

          cy.get('link[rel="canonical"]')
            .should('exist')
            .should('have.attr', 'href', BASE_URL + pagePath)
        } else {
          throw new Error('href is undefined')
        }
      })
  })
})
