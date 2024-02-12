import matter from 'gray-matter'

import { PATHS, PathValues } from '../../src/app/_constants/paths'
import { BASE_URL } from '../../src/app/_constants/siteMetadata'

export function testPageMetadata(
  pagePath: PathValues,
  contentPath: string = pagePath
) {
  it(`should use the correct metadata from the markdown file`, function () {
    const filePath = `src/content/pages${contentPath}.md`

    cy.readFile(filePath).then((markdownContent: string) => {
      const frontMatter = matter(markdownContent).data as {
        title: string
        description: string
        seo: { title: string; description: string }
      }

      const { title, description, seo } = frontMatter

      cy.visit(pagePath)

      if (pagePath === PATHS.HOME) {
        cy.title().should('eq', 'Filecoin Foundation')
      } else {
        cy.title().should('eq', `${seo.title} | Filecoin Foundation`)
      }

      cy.get('header')
        .first()
        .should('exist')
        .within(() => {
          cy.get('h1').should('have.text', title)

          cy.get('p').should('have.text', description)
        })

      cy.get('link[rel="canonical"]')
        .should('exist')
        .should('have.attr', 'href', BASE_URL + pagePath)
    })
  })
}
