import { BASE_URL } from '../../src/app/_constants/siteMetadata'

export function verifyCanonicalLink(path) {
  const expectedCanonicalLink = `${BASE_URL}${path}`
  cy.get('link[rel="canonical"]')
    .should('exist')
    .should('have.attr', 'href', expectedCanonicalLink)
}
