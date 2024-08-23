import matter from 'gray-matter'

import type { PathConfig } from '../../src/app/_constants/paths'
import { verifyCanonicalLink } from '../support/verifyCanonicalLinkUtil'
import { verifyPageTitle } from '../support/verifyPageTitleUtil'

export function testPageMetadata({
  path: { mainContentPath, path, entriesContentPath },
  hasPageHeaderDescription = true,
  includesFeaturedEntry = false,
  overrideDefaultTitle = false,
}: {
  path: PathConfig
  hasPageHeaderDescription?: boolean
  includesFeaturedEntry?: boolean
  overrideDefaultTitle?: boolean
}) {
  it(`should use the correct metadata from the markdown file`, function () {
    const filePath = `${mainContentPath}.md`

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

      cy.visit(path)
      cy.percySnapshot()

      verifyPageTitle(path, seo.title, overrideDefaultTitle)

      if (includesFeaturedEntry && featuredSlug) {
        handleFeaturedEntry(entriesContentPath as string, featuredSlug)
      } else {
        verifyHeaderContent(header, hasPageHeaderDescription)
      }

      verifyCanonicalLink(path)
    })
  })
}

function handleFeaturedEntry(entriesContentPath: string, slug: string) {
  const featuredEntryFilePath = `${entriesContentPath}/${slug}.md`

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
