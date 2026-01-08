import path from 'path'

import { tests } from '@filecoin-foundation/cypress/support'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'
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

  it(tests.links.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      tests.links.fn(path.join(PATHS.EVENTS.path, slug))
    })
  })
})

describe('Event Page - Visual Regression', () => {
  const EVENT_SLUG = 'filecoin-onchain-cloud-launch'

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path.join(PATHS.EVENTS.path, EVENT_SLUG))
  })
})
