import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { verifyLinks } from '@/cypress/support/verifyLinksUtil'
import type { PageFrontmatterSeo } from '@/cypress/tasks/getPageFrontmatterSeo'

const { mainContentPath, path } = PATHS.ABOUT

describe('About Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>('getPageFrontmatterSeo', mainContentPath).then(
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

  it('should check links', () => {
    verifyLinks(path)
  })

  it('should match visual snapshot', () => {
    cy.visit(path)
    cy.percySnapshot()
  })
})
