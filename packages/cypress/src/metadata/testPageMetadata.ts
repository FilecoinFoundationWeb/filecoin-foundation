/// <reference types="cypress" />

export type TestMetaDataOptions = {
  path: `/${string}`
  title: string
  description: string
  baseUrl: string
}

export function testPageMetaData(options: TestMetaDataOptions) {
  const { path, title, description, baseUrl } = options

  cy.visit(path)

  // Meta title
  cy.title().should('eq', title)

  // Meta description
  cy.get('head meta[name="description"]').should(
    'have.attr',
    'content',
    description,
  )

  // Canonical link
  cy.get('link[rel="canonical"]').should(
    'have.attr',
    'href',
    path === '/' ? baseUrl : `${baseUrl}${path}`,
  )

  // OG title
  cy.get('head meta[property="og:title"]').should('have.attr', 'content', title)

  // OG description
  cy.get('head meta[property="og:description"]').should(
    'have.attr',
    'content',
    description,
  )

  // OG image
  cy.get('head meta[property="og:image"]').should('have.attr', 'content')

  // Twitter title
  cy.get('head meta[name="twitter:title"]').should(
    'have.attr',
    'content',
    title,
  )

  // Twitter description
  cy.get('head meta[name="twitter:description"]').should(
    'have.attr',
    'content',
    description,
  )

  // Twitter image
  cy.get('head meta[name="twitter:image"]').should('have.attr', 'content')
}
