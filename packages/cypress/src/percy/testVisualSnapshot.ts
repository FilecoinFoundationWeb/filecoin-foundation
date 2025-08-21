import '@percy/cypress'

export function testVisualSnapshot(path: string) {
  cy.visit(path)
  cy.percySnapshot()
}
