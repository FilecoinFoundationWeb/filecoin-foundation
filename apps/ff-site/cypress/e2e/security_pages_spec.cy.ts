import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { verifyLinks } from '@/cypress/support/verifyLinksUtil'
import type { PageFrontmatterSeo } from '@/cypress/tasks/getPageFrontmatterSeo'
import { getMetaTitleTemplate } from '@/cypress/utils/getMetaTitleTemplate'

describe('Security - Main Page', () => {
  const { contentPath, path } = PATHS.SECURITY

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

  it('should check links', () => {
    verifyLinks(path)
  })

  it('should match visual snapshot', () => {
    cy.visit(path)
    cy.percySnapshot()
  })
})

describe('Security - Bug Bounty Program Page', () => {
  const { path } = PATHS.BUG_BOUNTY

  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>(
      'getPageFrontmatterSeo',
      'src/content/pages/security/bug-bounty/bug-bounty', // Will be refactored when createPathConfig gets refactored
    ).then((seo) => {
      tests.metadata.fn({
        path,
        title: getMetaTitleTemplate(seo.title),
        description: seo.description,
        baseUrl: BASE_URL,
      })
    })
  })

  it('should check links', () => {
    verifyLinks(path)
  })

  it('should match visual snapshot', () => {
    cy.visit(path)
    cy.percySnapshot()
  })
})

describe('Security - Bug Bounty Program - Leaderboard Page', () => {
  const { contentPath, path } = PATHS.SECURITY_BUG_BOUNTY_LEADERBOARD

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

  it('should check links', () => {
    verifyLinks(path)
  })

  it('should match visual snapshot', () => {
    cy.visit(path)
    cy.percySnapshot()
  })
})

describe('Security - Coordinated Disclosure Policy Page', () => {
  const { contentPath, path } = PATHS.COORDINATED_DISCLOSURE_POLICY

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

  it('should check links', () => {
    verifyLinks(path)
  })

  it('should match visual snapshot', () => {
    cy.visit(path)
    cy.percySnapshot()
  })
})

describe('Security - Maturity Model Page', () => {
  const { contentPath, path } = PATHS.MATURITY_MODEL

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
