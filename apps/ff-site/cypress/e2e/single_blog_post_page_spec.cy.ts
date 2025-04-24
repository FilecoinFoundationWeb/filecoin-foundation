import path from 'path'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import type { GenericEntryFrontmatter } from '@/cypress/tasks/getEntryFrontmatter'
import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'

const CONTENT_FOLDER = PATHS.BLOG.entriesContentPath as string

describe('Random Blog Post', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<GenericEntryFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ title, seo }) => {
        const seoTitle = seo.title || title

        tests.metadata.fn({
          path: path.join(PATHS.BLOG.path, slug),
          title: getMetaTitleWithSuffix(seoTitle),
          description: seo.description,
          baseUrl: BASE_URL,
        })
      })
    })
  })
})
