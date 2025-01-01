export function getRandomSlug(
  directoryPath: string,
): Cypress.Chainable<string> {
  return cy
    .task<Array<string>>('readDir', directoryPath)
    .then((files: Array<string>) => {
      const slugs = files.map((file) => file.replace('.md', ''))
      const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
      return cy.wrap(randomSlug)
    })
}
