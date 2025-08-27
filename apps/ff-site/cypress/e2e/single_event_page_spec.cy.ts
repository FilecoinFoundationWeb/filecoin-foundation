import path from 'path'

import { getMetaTitleWithSuffix } from '@filecoin-foundation/cypress/utils'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { METADATA_TITLE_SUFFIX } from '@/events/constants/metadata'

const CONTENT_FOLDER = PATHS.EVENTS.entriesPath

describe('Random Event Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<GenericEntryFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ title, seo }) => {
        const metaTitle = seo.title || title + METADATA_TITLE_SUFFIX
        const metaTitleWithSuffix = getMetaTitleWithSuffix({
          title: metaTitle,
          organizationName: ORGANIZATION_NAME,
        })

        tests.metadata.fn({
          path: path.join(PATHS.EVENTS.path, slug),
          title: metaTitleWithSuffix,
          description: seo.description,
          baseUrl: BASE_URL,
        })
      })
    })
  })

  it(tests.links.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      tests.links.fn(path.join(PATHS.EVENTS.path, slug))
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      tests.visualSnapshot.fn(path.join(PATHS.EVENTS.path, slug))
    })
  })
})
