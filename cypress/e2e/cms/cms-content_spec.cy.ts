describe('Check Image Format', () => {
  const contentUrl = Cypress.env('CONTENT_URL')

  beforeEach(() => {
    if (!contentUrl) {
      throw new Error('CONTENT_URL environment variable is not set')
    }
    cy.visit(contentUrl)
  })

  it('should have images in WebP format', () => {
    cy.get('img')
      .should('have.attr', 'srcset')
      .then((srcset) => {
        const sources = srcset.split(',').map((src) => src.trim().split(' ')[0])
        sources.forEach((source) => {
          expect(source).to.match(/\.webp$/)
        })
      })

    cy.get('img')
      .should('have.attr', 'src')
      .and('match', /\.webp$/)
  })
})
