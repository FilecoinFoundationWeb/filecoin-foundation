import { BASE_URL } from '../../src/app/_constants/siteMetadata'

export function verifyCanonicalLink(path: string) {
  const expectedCanonicalLink = path === '/' ? BASE_URL : `${BASE_URL}${path}`

  cy.get('link[rel="canonical"]')
    .should('exist')
    .should('have.attr', 'href', expectedCanonicalLink)
}
