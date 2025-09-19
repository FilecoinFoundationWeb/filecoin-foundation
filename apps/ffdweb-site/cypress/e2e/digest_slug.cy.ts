import path from 'path'

import { tests } from '@filecoin-foundation/cypress/support'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'
import type { DigestArticleResult } from '@/cypress/utils/getRandomDigestArticle'

const CONTENT_FOLDER = PATHS.DIGEST.entriesPath

describe('Digest Slug Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<DigestArticleResult>('getRandomDigestArticle', CONTENT_FOLDER).then(
      ({ slug, issueNumber }) => {
        cy.task<GenericEntryFrontmatter>(
          'getEntryFrontmatter',
          path.join(CONTENT_FOLDER, slug),
        ).then(({ title, seo }) => {
          const seoTitle = seo.title || title
          const metaTitleWithSuffix = getMetaTitleWithSuffix(seoTitle)

          tests.metadata.fn({
            path: PATHS.DIGEST.article(issueNumber, slug),
            title: metaTitleWithSuffix,
            description: seo.description,
            baseUrl: BASE_URL,
          })
        })
      },
    )
  })

  it(tests.links.prompt, () => {
    cy.task<DigestArticleResult>('getRandomDigestArticle', CONTENT_FOLDER).then(
      ({ slug, issueNumber }) => {
        tests.links.fn(PATHS.DIGEST.article(issueNumber, slug))
      },
    )
  })

  it(tests.visualSnapshot.prompt, () => {
    cy.task<DigestArticleResult>('getRandomDigestArticle', CONTENT_FOLDER).then(
      ({ slug, issueNumber }) => {
        tests.visualSnapshot.fn(PATHS.DIGEST.article(issueNumber, slug))
      },
    )
  })
})
