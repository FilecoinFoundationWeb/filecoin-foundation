import '@percy/cypress'

export function testVisualSnapshot(path: string) {
  cy.visit(path)

  cy.window().then({ timeout: 60000 }, () => {
    try {
      cy.percySnapshot()
    } catch (error) {
      cy.log('Percy snapshot failed, continuing tests', error)
    }
  })
}
