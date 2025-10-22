import path from 'path'

import { tests } from '@filecoin-foundation/cypress/support'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'

const CONTENT_FOLDER = PATHS.DIGEST

describe('Digest Slug Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<{ issueNumber: string; articleSlug: string }>(
      'getRandomDigestArticleSlug',
      CONTENT_FOLDER.issuePath,
    ).then(({ issueNumber, articleSlug }) => {
      cy.task<GenericEntryFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER.articlesPath, articleSlug),
      ).then(({ title, seo }) => {
        const seoTitle = seo.title || title
        const metaTitleWithSuffix = getMetaTitleWithSuffix(seoTitle)

        const articlePath = `${PATHS.DIGEST.articleUrl({ issueNumber, articleSlug })}`

        tests.metadata.fn({
          path: articlePath,
          title: metaTitleWithSuffix,
          description: seo.description,
          baseUrl: BASE_URL,
        })
      })
    })
  })

  it(tests.links.prompt, () => {
    cy.task<{ issueNumber: string; articleSlug: string }>(
      'getRandomDigestArticleSlug',
      CONTENT_FOLDER.issuePath,
    ).then(({ issueNumber, articleSlug }) => {
      tests.links.fn(`${PATHS.DIGEST.issueUrl({ issueNumber })}/${articleSlug}`)
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    cy.task<{ issueNumber: string; articleSlug: string }>(
      'getRandomDigestArticleSlug',
      CONTENT_FOLDER.issuePath,
    ).then(({ issueNumber, articleSlug }) => {
      tests.visualSnapshot.fn(
        `${PATHS.DIGEST.issueUrl({ issueNumber })}/${articleSlug}`,
      )
    })
  })
})
