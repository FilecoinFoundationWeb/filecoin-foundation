import { tests } from '@filecoin-foundation/cypress/support'
import { getMetaTitleTemplate } from '@filecoin-foundation/cypress/utils'
import type { PageFrontmatterSeo } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ROOT_METADATA } from '@/constants/siteMetadata'

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

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
  })
})

describe('Security - Bug Bounty Program Page', () => {
  const { path, contentPath } = PATHS.BUG_BOUNTY

  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>('getPageFrontmatterSeo', contentPath).then(
      (seo) => {
        tests.metadata.fn({
          path,
          title: getMetaTitleTemplate({
            title: seo.title,
            rootMetadata: ROOT_METADATA,
          }),
          description: seo.description,
          baseUrl: BASE_URL,
        })
      },
    )
  })

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
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

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
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

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
  })
})

describe('Security - Maturity Model Page', () => {
  const { contentPath, path } = PATHS.MATURITY_MODEL

  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>('getPageFrontmatterSeo', contentPath).then(
      (seo) => {
        const metaTitleTemplate = getMetaTitleTemplate({
          title: seo.title,
          rootMetadata: ROOT_METADATA,
        })

        tests.metadata.fn({
          path,
          title: metaTitleTemplate,
          description: seo.description,
          baseUrl: BASE_URL,
        })
      },
    )
  })

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
  })
})
