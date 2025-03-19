import { type MetadataParams } from '@/utils/createMetadata'

import { metadata } from '@/layout'

export function testPageTitle(title: MetadataParams['title']) {
  if (typeof title === 'string') {
    const templateTitle = metadata.title.template.replace('%s', title)
    cy.title().should('eq', templateTitle)
  } else {
    cy.title().should('eq', title.absolute)
  }
}
