/// <reference types="cypress" />

export type TestMetaDataOptions = {
  path: string
  title: string
  description: string
  baseUrl: string
}

export function testPageMetaData(options: TestMetaDataOptions) {
  const { path, title, description, baseUrl } = options

  cy.visit(path)

  cy.get('head').within(() => {
    // Basic metadata group
    cy.get('title,meta[name="description"],link[rel="canonical"]').should(
      ($elements) => {
        expect($elements.eq(0)).to.have.text(title)
        expect($elements.eq(1)).to.have.attr('content', description)
        expect($elements.eq(2)).to.have.attr(
          'href',
          path === '/' ? baseUrl : `${baseUrl}${path}`,
        )
      },
    )

    // Open Graph metadata group
    cy.get('meta[property^="og:"]').should(($elements) => {
      expect($elements.filter('[property="og:title"]')).to.have.attr(
        'content',
        title,
      )
      expect($elements.filter('[property="og:description"]')).to.have.attr(
        'content',
        description,
      )
      expect($elements.filter('[property="og:image"]')).to.have.attr('content')
    })

    // Twitter metadata group
    cy.get('meta[name^="twitter:"]').should(($elements) => {
      expect($elements.filter('[name="twitter:title"]')).to.have.attr(
        'content',
        title,
      )
      expect($elements.filter('[name="twitter:description"]')).to.have.attr(
        'content',
        description,
      )
      expect($elements.filter('[name="twitter:image"]')).to.have.attr('content')
    })
  })
}
