import { LAYOUT_METADATA, BASE_URL } from '@/constants/siteMetadata'

import type { MetadataParams } from '@/utils/createMetadata'

type TestMetaDataOptions = {
  path: MetadataParams['path']
  title: MetadataParams['title']
  description: MetadataParams['description']
}

const imageRegex = /^(https?:\/\/|\/).+\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i

export function testPageMetaData(options: TestMetaDataOptions) {
  const { path, title, description } = options

  const metaTitle = getMetaTitle(title)

  cy.visit(path)

  // Meta title
  cy.title().should('eq', metaTitle)

  // Meta description
  cy.get('head meta[name="description"]')
    .should('have.attr', 'content', description)
    .should('eq', description)

  // Canonical link
  cy.get('link[rel="canonical"]')
    .should('have.attr', 'href', `${BASE_URL}${path}`)
    .should('eq', `${BASE_URL}${path}`)

  // OG title
  cy.get('head meta[property="og:title"]')
    .should('have.attr', 'content', metaTitle)
    .should('eq', metaTitle)

  // OG description
  cy.get('head meta[property="og:description"]')
    .should('have.attr', 'content', description)
    .should('eq', description)

  // OG image
  cy.get('head meta[property="og:image"]')
    .should('have.attr', 'content')
    .should('match', imageRegex)

  // Twitter title
  cy.get('head meta[name="twitter:title"]')
    .should('have.attr', 'content', metaTitle)
    .should('eq', metaTitle)

  // Twitter description
  cy.get('head meta[name="twitter:description"]')
    .should('have.attr', 'content', description)
    .should('eq', description)

  // Twitter image
  cy.get('head meta[name="twitter:image"]')
    .should('have.attr', 'content')
    .should('match', imageRegex)
}

function getMetaTitle(title: TestMetaDataOptions['title']) {
  if (typeof title === 'string') {
    const templateTitle = LAYOUT_METADATA.title.template.replace('%s', title)
    return templateTitle
  } else {
    return title.absolute
  }
}
