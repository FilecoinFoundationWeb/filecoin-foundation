export function getAllSlugs(
  directoryPath: string,
): Cypress.Chainable<string[]> {
  return cy.task<string[]>('readDir', directoryPath).then((files: string[]) => {
    const slugs = files.map((file) => file.replace('.md', ''))
    return cy.wrap(slugs)
  })
}
