import matter from 'gray-matter'

import { PATHS, PathConfig } from '../../src/app/_constants/paths'
import { BASE_URL } from '../../src/app/_constants/siteMetadata'

export function testPageMetadata(path: PathConfig) {
  it(`should use the correct metadata from the markdown file`, function () {
    const filePath = `${path.mainContentPath}.md`

    cy.readFile(filePath).then((markdownContent: string) => {
      const frontMatter = matter(markdownContent).data as {
        header: { title: string; description: string }
        seo: { title: string; description: string }
      }

      const { header, seo } = frontMatter

      cy.visit(path.path)

      if (path.path === PATHS.HOME.path) {
        cy.title().should('eq', 'Filecoin Foundation')
      } else {
        cy.title().should('eq', `${seo.title} | Filecoin Foundation`)
      }

      cy.get('header')
        .first()
        .should('exist')
        .within(() => {
          cy.get('h1').should('have.text', header.title)

          cy.get('p').should('have.text', header.description)
        })

      cy.get('link[rel="canonical"]')
        .should('exist')
        .should('have.attr', 'href', BASE_URL + path.path)
    })
  })
}
