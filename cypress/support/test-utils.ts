import matter from 'gray-matter'

import { PATHS, PathConfig } from '../../src/app/_constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '../../src/app/_constants/siteMetadata'

export function testPageMetadata({
  path: { mainContentPath, path, entriesContentPath },
  hasPageHeaderDescription = true,
  includesFeaturedEntry = false,
  useAbsoluteTitle = false,
}: {
  path: PathConfig
  hasPageHeaderDescription?: boolean
  includesFeaturedEntry?: boolean
  useAbsoluteTitle?: boolean
}) {
  it(`should use the correct metadata from the markdown file`, function () {
    const filePath = `${mainContentPath}.md`

    // Retrieve and process the main content's metadata
    cy.readFile(filePath).then((markdownContent: string) => {
      const {
        header,
        seo,
        featured_entry: featuredSlug,
      } = matter(markdownContent).data as {
        header: { title: string; description: string }
        seo: { title: string; description: string }
        featured_entry?: string
      }

      // Visit the current page
      cy.visit(path)

      // Verify the page title
      verifyPageTitle(path, seo.title, useAbsoluteTitle)

      // Conditional logic for pages with a featured entry
      if (includesFeaturedEntry && featuredSlug) {
        handleFeaturedEntry(entriesContentPath as string, featuredSlug)
      } else {
        verifyHeaderContent(header, hasPageHeaderDescription)
      }

      // Verify the canonical link
      verifyCanonicalLink(path)
    })
  })
}

// Function to verify the page title
function verifyPageTitle(path: string, seoTitle: string, useAbsoluteTitle: boolean) {
  const expectedTitle = useAbsoluteTitle
    ? seoTitle
    : path === PATHS.HOME.path
      ? `${ORGANIZATION_NAME} | Decentralized Storage Solutions`
      : `${seoTitle} | ${ORGANIZATION_NAME}`

  cy.title().should('eq', expectedTitle)
}

// Function to verify the canonical link
function verifyCanonicalLink(path: string) {
  const expectedCanonicalLink =
    path === PATHS.HOME.path ? BASE_URL : `${BASE_URL}${path}`

  cy.get('link[rel="canonical"]').should(
    'have.attr',
    'href',
    expectedCanonicalLink,
  )
}

// Function to handle verification of featured entry content
function handleFeaturedEntry(entriesContentPath: string, slug: string) {
  const featuredEntryFilePath = `${entriesContentPath}/${slug}.md`

  // Fetch and wrap the featured entry's data for later use
  cy.readFile(featuredEntryFilePath).then((content: string) => {
    const { data } = matter(content)
    cy.wrap(data).as('featuredEntryData')
  })

  cy.get('@featuredEntryData').then((featuredEntryData: unknown) => {
    const entry = featuredEntryData as unknown as {
      title: string
      description: string
    }
    verifyHeaderContent(entry, true)
  })
}

// Function to verify the header's title and description
function verifyHeaderContent(
  { title, description }: { title: string; description: string | string[] },
  hasPageHeaderDescription: boolean,
) {
  cy.get('header')
    .first()
    .should('exist')
    .within(() => {
      cy.get('h1').should('have.text', title)

      if (hasPageHeaderDescription && description) {
        // Handle case if description is string[] or string type
        if (Array.isArray(description)) {
          description.forEach((text: string) => {
            cy.get('p').should('contain.text', text)
          })
        } else {
          cy.get('p').should('contain.text', description)
        }
      }
    })
}
