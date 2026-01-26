import path from 'path'

import { tests } from '@filecoin-foundation/cypress/support'
import { buildIssuePath } from '@filecoin-foundation/utils/buildDigestPath'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'

type DigestIssueFrontmatter = GenericEntryFrontmatter & {
  'issue-number': number
}

const CONTENT_FOLDER = PATHS.DIGEST.issuesContentPath

describe('Digest Issue Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<DigestIssueFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ title, seo, 'issue-number': issueNumber }) => {
        const seoTitle = seo.title || title
        const metaTitleWithSuffix = getMetaTitleWithSuffix(seoTitle)
        const issuePath = buildIssuePath({ issueNumber })

        tests.metadata.fn({
          path: `${PATHS.DIGEST.path}/${issuePath}`,
          title: metaTitleWithSuffix,
          description: seo.description,
          baseUrl: BASE_URL,
        })
      })
    })
  })

  it(tests.links.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<DigestIssueFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ 'issue-number': issueNumber }) => {
        const issuePath = buildIssuePath({ issueNumber })
        tests.links.fn(`${PATHS.DIGEST.path}/${issuePath}`)
      })
    })
  })
})

describe('Digest Issue - Visual Regression', () => {
  const DIGEST_ISSUE_SLUG = 'issue-1'

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path.join(PATHS.DIGEST.path, DIGEST_ISSUE_SLUG))
  })
})
