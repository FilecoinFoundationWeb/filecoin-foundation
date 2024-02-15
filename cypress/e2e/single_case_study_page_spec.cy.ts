import { PATHS } from '../../src/app/_constants/paths'
import { BASE_URL } from '../../src/app/_constants/siteMetadata'

describe('Single Case Study Page', function () {
  it('should check metadata of the first case study', function () {
    cy.visit(PATHS.CASE_STUDIES.path)

    cy.get(`a[href*="${PATHS.CASE_STUDIES.path}/"]`)
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
