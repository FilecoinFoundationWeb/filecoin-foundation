import matter from 'gray-matter'

import { verifyCanonicalLink } from './verifyCanonicalLinkUtil'
import { verifyMetaDescription } from './verifyMetaDescriptionUtil'
import { verifyPageTitle } from './verifyPageTitleUtil'

export function verifyMetadataForDynamicPages({
  contentFilePath,
  urlPath,
  metadataTitleSuffix,
}: {
  contentFilePath: string
  urlPath: string
  metadataTitleSuffix?: string
}) {
  cy.visit(urlPath)

  verifyCanonicalLink(urlPath)

  cy.readFile(contentFilePath).then((markdownContent: string) => {
    const { title, seo } = matter(markdownContent).data
    const seoTitle = generateSeoTitle(title, seo?.title, metadataTitleSuffix)

    verifyPageTitle(urlPath, seoTitle, seo.overrideDefaultTitle ?? false)
    verifyMetaDescription(seo.description)
  })
}

function generateSeoTitle(title: string, seoTitle?: string, suffix?: string) {
  if (seoTitle) return seoTitle
  return suffix ? `${title}${suffix}` : title
}
