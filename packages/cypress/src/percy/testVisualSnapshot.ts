import '@percy/cypress'

type TestVisualSnapshotOptions = {
  path: string
}

export function testVisualSnapshot({ path }: TestVisualSnapshotOptions) {
  cy.visit(path)
  cy.percySnapshot()
}
