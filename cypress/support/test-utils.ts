import matter from 'gray-matter'

import { PATHS, PathConfig } from '../../src/app/_constants/paths'
import { BASE_URL } from '../../src/app/_constants/siteMetadata'

export function testPageMetadata(
  path: PathConfig,
  includesFeaturedPost: boolean = false,
) {
  it(`should use the correct metadata from the markdown file`, function () {
    const filePath = `${path.mainContentPath}.md`

    // Retrieve and process the main content's metadata
    cy.readFile(filePath).then((markdownContent: string) => {
      const {
        header,
        seo,
        featured_post: featuredPostSlug,
      } = matter(markdownContent).data as {
        header?: { title: string; description: string }
        seo: { title: string; description: string }
        featured_post?: string
      }

      // Visit the current page
      cy.visit(path.path)

      // Check the page title
      cy.title().should(
        'eq',
        path.path === PATHS.HOME.path
          ? 'Filecoin Foundation'
          : `${seo.title} | Filecoin Foundation`,
      )

      // Conditional logic for pages with a featured post
      if (includesFeaturedPost && featuredPostSlug) {
        handleFeaturedPost(path, featuredPostSlug)
      } else if (header) {
        verifyHeaderContent(header)
      }

      // Canonical link check, moved outside the conditionals to avoid repetition
      cy.get('link[rel="canonical"]').should(
        'have.attr',
        'href',
        path.path === PATHS.HOME.path
          ? `${BASE_URL}`
          : `${BASE_URL}${path.path}`,
      )
    })
  })
}

// Function to handle verification of featured post content
function handleFeaturedPost(path: PathConfig, slug: string) {
  const featuredPostContentPath = `${path.entriesContentPath}/${slug}`
  const featuredPostFilePath = `${featuredPostContentPath}.md`

  // Fetch and wrap the featured post's data for later use
  cy.readFile(featuredPostFilePath).then((content: string) => {
    const { data } = matter(content)
    cy.wrap(data).as('featuredPostData')
  })

  cy.get('@featuredPostData').then((featuredPostData) => {
    const post = featuredPostData as unknown as {
      title: string
      description: string
    }
    verifyHeaderContent(post)
  })
}

// Function to verify the header's title and description
function verifyHeaderContent(content: {
  title: string
  description: string | string[]
}) {
  cy.get('header')
    .first()
    .should('exist')
    .within(() => {
      cy.get('h1').should('have.text', content.title)

      if (content.description) {
        // handle case if description is string[] or string type
        if (Array.isArray(content.description)) {
          content.description.forEach((text: string) => {
            cy.get('p').should('contain.text', text)
          })
        } else {
          cy.get('p').should('contain.text', content.description)
        }
      }
    })
}
