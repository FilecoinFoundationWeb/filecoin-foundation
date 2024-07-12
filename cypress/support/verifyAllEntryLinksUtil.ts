import { getAllSlugs } from './getAllSlugsUtil'
import { verifyLinks } from './verifyLinksUtil'

export function verifyAllEntryLinks(directoryPath: string, basePath: string) {
  getAllSlugs(directoryPath).then((slugs) => {
    slugs.forEach((slug) => {
      cy.log('Testing Slug:', slug)
      verifyLinks(`${basePath}/${slug}`)
    })
  })
}
