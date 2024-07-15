import path from 'path'

import matter from 'gray-matter'

export function getAllSlugs(
  directoryPath: string,
  category: string,
): Cypress.Chainable<string[]> {
  return cy.task<string[]>('readDir', directoryPath).then((files) => {
    const slugs: string[] = []

    const fileReadPromises = files.map((file) => {
      const filePath = path.join(directoryPath, file)

      return cy.task('readFile', filePath).then((content) => {
        const parsedContent = matter(content as string)
        if (parsedContent.data.category === category) {
          slugs.push(file.replace('.md', ''))
        }
      })
    })

    return cy.wrap(Promise.all(fileReadPromises).then(() => slugs))
  })
}

export function getAllEventSlugs(
  directoryPath: string,
): Cypress.Chainable<string[]> {
  return cy.task<string[]>('readDir', directoryPath).then((files) => {
    const slugs: string[] = []

    const fileReadPromises = files.map((file) => {
      const filePath = path.join(directoryPath, file)

      return cy.task('readFile', filePath).then((content) => {
        const parsedContent = matter(content as string)

        const isValidExternalLink =
          !parsedContent.data['external-link'] ||
          typeof parsedContent.data['external-link'] === 'string'

        if (isValidExternalLink) {
          slugs.push(file.replace('.md', ''))
        }
      })
    })

    return cy.wrap(Promise.all(fileReadPromises).then(() => slugs))
  })
}
