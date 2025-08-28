;`import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@filecoin-foundation/cypress/support'

import type { PageFrontmatterSeo } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'
import { getMetaTitleTemplate } from '@filecoin-foundation/cypress/utils'

const { contentPath, path } = PATHS.__PATH_NAME__

describe('__PAGE_NAME_START_CASE__ Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>('getPageFrontmatterSeo', contentPath).then(
      (seo) => {
        tests.metadata.fn({
          path,
          title: getMetaTitleTemplate(seo.title),
          description: seo.description,
          baseUrl: BASE_URL,
        })
      },
    )
  })

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it('should match visual snapshot', () => {
    cy.visit(path)
    cy.percySnapshot()
  })
})`
