import path from 'path'

import { tests } from '@filecoin-foundation/cypress/support'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'

type DigestArticleFrontmatter = GenericEntryFrontmatter & {
  'issue-number': number
}

const CONTENT_FOLDER = PATHS.DIGEST.articlesContentPath

describe('Random Digest Article', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<DigestArticleFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ title, seo, 'issue-number': issueNumber }) => {
        const seoTitle = seo.title || title
        const metaTitleWithSuffix = getMetaTitleWithSuffix(seoTitle)

        tests.metadata.fn({
          path: `${PATHS.DIGEST.articleUrl({ issueNumber, articleSlug: slug })}`,
          title: metaTitleWithSuffix,
          description: seo.description,
          baseUrl: BASE_URL,
        })
      })
    })
  })

  it(tests.links.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<DigestArticleFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ 'issue-number': issueNumber }) => {
        tests.links.fn(
          `${PATHS.DIGEST.articleUrl({ issueNumber, articleSlug: slug })}`,
        )
      })
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<DigestArticleFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ 'issue-number': issueNumber }) => {
        tests.visualSnapshot.fn(
          `${PATHS.DIGEST.articleUrl({ issueNumber, articleSlug: slug })}`,
        )
      })
    })
  })
})

describe('Digest Article - Visual Regression', () => {
  const DIGEST_ARTICLE_SLUG = 'issue-1/why-we-need-to-fight-for-our-privacy'

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path.join(PATHS.DIGEST.path, DIGEST_ARTICLE_SLUG))
  })
})
