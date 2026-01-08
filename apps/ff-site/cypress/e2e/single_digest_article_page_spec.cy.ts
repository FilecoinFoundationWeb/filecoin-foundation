import path from 'path'

import { tests } from '@filecoin-foundation/cypress/support'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'

const CONTENT_FOLDER = PATHS.DIGEST.articlesContentPath

describe('Random Digest Article', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<GenericEntryFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ title, seo }) => {
        const seoTitle = seo.title || title
        const metaTitleWithSuffix = getMetaTitleWithSuffix(seoTitle)

        tests.metadata.fn({
          path: path.join(PATHS.DIGEST.path, slug),
          title: metaTitleWithSuffix,
          description: seo.description,
          baseUrl: BASE_URL,
        })
      })
    })
  })

  it(tests.links.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      tests.links.fn(path.join(PATHS.DIGEST.path, slug))
    })
  })
})

describe('Digest Article - Visual Regression', () => {
  const DIGEST_ARTICLE_SLUG =
    'enterprise-storage-market-insights-from-the-field'

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path.join(PATHS.DIGEST.path, DIGEST_ARTICLE_SLUG))
  })
})
