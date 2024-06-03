import matter from 'gray-matter'

import { PATHS, PathConfig } from '../../src/app/_constants/paths'
import { BASE_URL } from '../../src/app/_constants/siteMetadata'

export function testPageMetadata(
  path: PathConfig,
  includesFeaturedEntry: boolean = false,
  checkHeader: boolean = true,
) {
  it(`should use the correct metadata from the markdown file`, function () {
    const filePath = `${path.mainContentPath}.md`

    // Retrieve and process the main content's metadata
    cy.readFile(filePath).then((markdownContent: string) => {
      const {
        header,
        seo,
        featured_entry: featuredSlug,
      } = matter(markdownContent).data as {
        header?: { title: string; description: string }
        seo: { title: string; description: string }
        featured_entry?: string
      }

      // Visit the current page
      cy.visit(path.path)

      // Check the page title
      cy.title().should(
        'eq',
        path.path === PATHS.HOME.path
          ? 'Filecoin Foundation | Decentralized Storage Solutions'
          : `${seo.title} | Filecoin Foundation`,
      )

      // Conditional logic for pages with a featured entry
      if (includesFeaturedEntry && featuredSlug) {
        handleFeaturedEntry(path, featuredSlug)
      } else if (header && checkHeader) {
        verifyHeaderContent(header)
      } else if (header && !checkHeader) {
        verifyContent(header)
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

// Function to handle verification of featured entry content
function handleFeaturedEntry(path: PathConfig, slug: string) {
  const featuredEntryContentPath = `${path.entriesContentPath}/${slug}`
  const featuredEntryFilePath = `${featuredEntryContentPath}.md`

  // Fetch and wrap the featured entry's data for later use
  cy.readFile(featuredEntryFilePath).then((content: string) => {
    const { data } = matter(content)
    cy.wrap(data).as('featuredEntryData')
  })

  cy.get('@featuredEntryData').then((featuredEntryData) => {
    const entry = featuredEntryData as unknown as {
      title: string
      description: string
    }
    verifyHeaderContent(entry)
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

// Function to verify the content's title and description
function verifyContent(content: {
  title: string
  description: string | string[]
}) {
  cy.get('h1').should('have.text', content.title)

  if (content.description) {
    if (Array.isArray(content.description)) {
      content.description.forEach((text: string) => {
        cy.get('p').should('contain.text', text)
      })
    } else {
      cy.get('p').should('contain.text', content.description)
    }
  }
}
