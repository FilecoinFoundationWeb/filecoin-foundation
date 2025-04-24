import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { verifyLinks } from '@/cypress/support/verifyLinksUtil'
import type { PageFrontmatterSeo } from '@/cypress/tasks/getPageFrontmatterSeo'
import { getMetaTitleTemplate } from '@/cypress/utils/getMetaTitleTemplate'

describe('Security - Main Page', () => {
  const { mainContentPath, path } = PATHS.SECURITY

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

describe('Security - Bug Bounty Program Page', () => {
  const { mainContentPath, path } = PATHS.BUG_BOUNTY

  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>('getPageFrontmatterSeo', mainContentPath).then(
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

describe('Security - Coordinated Disclosure Policy Page', () => {
  const { mainContentPath, path } = PATHS.COORDINATED_DISCLOSURE_POLICY

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

describe('Security - Maturity Model Page', () => {
  const { mainContentPath, path } = PATHS.MATURITY_MODEL

  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>('getPageFrontmatterSeo', mainContentPath).then(
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
