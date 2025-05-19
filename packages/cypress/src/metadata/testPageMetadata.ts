/// <reference types="cypress" />

export type TestMetaDataOptions = {
  path: string
  title: string
  description: string
  baseUrl: string
}

export function testPageMetaData({
  path,
  title,
  description,
  baseUrl,
}: TestMetaDataOptions) {
  const canonicalUrl = path === '/' ? baseUrl : `${baseUrl}${path}`

  cy.visit(path)

  // Title is not inside <head> element in DOM traversal context (it's a special case)
  cy.title().should('eq', title)

  cy.get('head').within(() => {
    // Basic metadata
    cy.get('meta[name="description"]').should(
      'have.attr',
      'content',
      description,
    )
    cy.get('link[rel="canonical"]').should('have.attr', 'href', canonicalUrl)

    // Open Graph metadata
    cy.get('meta[property^="og:"]').then(($els) => {
      expect($els.filter('[property="og:title"]')).to.have.attr(
        'content',
        title,
      )
      expect($els.filter('[property="og:description"]')).to.have.attr(
        'content',
        description,
      )
      expect($els.filter('[property="og:image"]')).to.have.attr('content')
    })

    // Twitter metadata
    cy.get('meta[name^="twitter:"]').then(($els) => {
      expect($els.filter('[name="twitter:title"]')).to.have.attr(
        'content',
        title,
      )
      expect($els.filter('[name="twitter:description"]')).to.have.attr(
        'content',
        description,
      )
      expect($els.filter('[name="twitter:image"]')).to.have.attr('content')
    })
  })
}
