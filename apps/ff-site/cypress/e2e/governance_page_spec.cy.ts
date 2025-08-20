import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import type { PageFrontmatterSeo } from '@/cypress/tasks/getPageFrontmatterSeo'

const { contentPath, path } = PATHS.GOVERNANCE

describe('Governance Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>('getPageFrontmatterSeo', contentPath).then(
      (seo) => {
        tests.metadata.fn({
          path,
          title: seo.title,
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
})
