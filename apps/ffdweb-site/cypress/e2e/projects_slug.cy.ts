import path from 'path'

import { tests } from '@filecoin-foundation/cypress/support'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'

const CONTENT_FOLDER = PATHS.PROJECTS.entriesPath

describe('Projects Slug Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<GenericEntryFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ title, seo }) => {
        const seoTitle = seo.title || title
        const metaTitleWithSuffix = getMetaTitleWithSuffix(seoTitle)

        tests.metadata.fn({
          path: `${PATHS.PROJECTS.path}/${slug}`,
          title: metaTitleWithSuffix,
          description: seo.description,
          baseUrl: BASE_URL,
        })
      })
    })
  })

  it(tests.links.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      tests.links.fn(`${PATHS.PROJECTS.path}/${slug}`)
    })
  })
})

describe('Projects Slug Page - Visual Regression', () => {
  const PROJECT_SLUG = 'muckrock-documentcloud'

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path.join(PATHS.PROJECTS.path, PROJECT_SLUG))
  })
})
