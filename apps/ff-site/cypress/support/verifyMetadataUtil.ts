import matter from 'gray-matter'

import { verifyCanonicalLink } from './verifyCanonicalLinkUtil'
import { verifyMetaDescription } from './verifyMetaDescriptionUtil'
import { verifyPageTitle } from './verifyPageTitleUtil'

export function verifyMetadata(
  directoryPath: string,
  pagePath: string,
  slug: string,
) {
  const fullPath = `${directoryPath}/${slug}.md`

  cy.visit(pagePath)

  // Verify the canonical link
  verifyCanonicalLink(pagePath)

  // Retrieve and process the page's metadata
  cy.readFile(fullPath).then((markdownContent: string) => {
    const { seo } = matter(markdownContent).data as {
      seo: {
        title: string
        description: string
        overrideDefaultTitle?: boolean
      }
    }

    // Verify the page title and meta description
    verifyPageTitle(pagePath, seo.title, seo.overrideDefaultTitle ?? false)
    verifyMetaDescription(seo.description)
  })
}
