export function testPageMetaDescription(description: string) {
  cy.get('head meta[name="description"]')
    .should('have.attr', 'content', description)
    .should('eq', description)
}
