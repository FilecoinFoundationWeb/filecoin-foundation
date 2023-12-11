import matter from 'gray-matter'

export function testPageMetadata(
  pagePath: string,
  contentPath: string = pagePath
) {
  it(`should use the correct metadata from the markdown file`, function () {
    const filePath = `src/content/pages/${contentPath}.md`

    cy.readFile(filePath).then((markdownContent: string) => {
      const frontMatter = matter(markdownContent).data as {
        title: string
        description: string
        seo: { title: string; description: string }
      }

      const { title, description, seo } = frontMatter

      cy.visit(`/${pagePath}`)

      cy.title().should('eq', `${seo.title} · Filecoin Foundation`)

      cy.get('header')
        .first()
        .should('exist')
        .within(() => {
          cy.get('h1').should('have.text', title)

          cy.get('p').should('have.text', description)
        })
    })
  })
}
