import path from 'path'

import { tests } from '@filecoin-foundation/cypress/support'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'

const CONTENT_FOLDER = PATHS.BLOG.entriesPath

describe('Random Blog Post', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<GenericEntryFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ title, seo }) => {
        const seoTitle = seo.title || title

        const metaTitleWithSuffix = getMetaTitleWithSuffix(seoTitle)

        tests.metadata.fn({
          path: path.join(PATHS.BLOG.path, slug),
          title: metaTitleWithSuffix,
          description: seo.description,
          baseUrl: BASE_URL,
        })
      })
    })
  })

  it(tests.links.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      tests.links.fn(path.join(PATHS.BLOG.path, slug))
    })
  })
})

describe('Blog Post - Visual Regression', () => {
  const BLOG_POST_SLUG = 'filecoin-foundation-2024-annual-report'

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path.join(PATHS.BLOG.path, BLOG_POST_SLUG))
  })
})
