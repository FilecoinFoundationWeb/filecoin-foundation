import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { verifyLinks } from '@/cypress/support/verifyLinksUtil'
import type { PageFrontmatterSeo } from '@/cypress/tasks/getPageFrontmatterSeo'
import { getMetaTitleTemplate } from '@/cypress/utils/getMetaTitleTemplate'
const { contentPath, path } = PATHS.DIGEST

describe('Digest Page', () => {
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

  it('should check links', () => {
    verifyLinks(path)
  })

  it('should match visual snapshot', () => {
    cy.visit(path)
    cy.percySnapshot()
  })
})
