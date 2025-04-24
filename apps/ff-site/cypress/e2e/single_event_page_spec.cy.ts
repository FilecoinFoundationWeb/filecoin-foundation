import path from 'path'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import type { GenericEntryFrontmatter } from '@/cypress/tasks/getEntryFrontmatter'
import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'
import { METADATA_TITLE_SUFFIX } from '@/events/constants/metadata'

const CONTENT_FOLDER = PATHS.EVENTS.entriesContentPath as string

describe('Random Event Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<GenericEntryFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ title, seo }) => {
        const metaTitle = seo.title || title + METADATA_TITLE_SUFFIX
        const metaTitleWithSuffix = getMetaTitleWithSuffix(metaTitle)

        tests.metadata.fn({
          path: path.join(PATHS.EVENTS.path, slug),
          title: metaTitleWithSuffix,
          description: seo.description,
          baseUrl: BASE_URL,
        })
      })
    })
  })
})
