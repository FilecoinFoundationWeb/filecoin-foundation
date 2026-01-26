import path from 'path'

import { tests } from '@filecoin-foundation/cypress/support'
import { buildArticlePath } from '@filecoin-foundation/utils/buildDigestPath'
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
        const articlePath = buildArticlePath({ issueNumber, articleSlug: slug })

        tests.metadata.fn({
          path: `${PATHS.DIGEST.path}/${articlePath}`,
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
        const articlePath = buildArticlePath({ issueNumber, articleSlug: slug })
        tests.links.fn(`${PATHS.DIGEST.path}/${articlePath}`)
      })
    })
  })
})

describe('Digest Article - Visual Regression', () => {
  const DIGEST_ISSUE_SLUG = 'issue-1'
  const DIGEST_ARTICLE_SLUG = 'why-we-need-to-fight-for-our-privacy'

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(
      path.join(PATHS.DIGEST.path, DIGEST_ISSUE_SLUG, DIGEST_ARTICLE_SLUG),
    )
  })
})
