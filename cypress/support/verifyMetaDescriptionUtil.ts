export function verifyMetaDescription(expectedDescription: string) {
  cy.get('meta[name="description"]').should('have.attr', 'content', expectedDescription)
}
