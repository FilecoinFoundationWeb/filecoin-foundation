import matter from 'gray-matter'

import { verifyCanonicalLink } from './verifyCanonicalLinkUtil'
import { verifyMetaDescription } from './verifyMetaDescriptionUtil'
import { verifyPageTitle } from './verifyPageTitleUtil'

export function verifyMetadataForDynamicPages({
  fullPath,
  pagePath,
  seoTitleSuffix,
}: {
  fullPath: string
  pagePath: string
  seoTitleSuffix?: string
}) {
  cy.visit(pagePath)

  // Verify the canonical link
  verifyCanonicalLink(pagePath)

  // Retrieve and process the page's metadata
  cy.readFile(fullPath).then((markdownContent: string) => {
    const { title, seo } = matter(markdownContent).data as {
      title: string
      seo: {
        title?: string
        description: string
        overrideDefaultTitle?: boolean
      }
    }

    const fallbackTitle = seoTitleSuffix ? `${title}${seoTitleSuffix}` : title

    const seoTitle = seo?.title || fallbackTitle

    // Verify the page title and meta description
    verifyPageTitle(pagePath, seoTitle, seo.overrideDefaultTitle ?? false)
    verifyMetaDescription(seo.description)
  })
}
