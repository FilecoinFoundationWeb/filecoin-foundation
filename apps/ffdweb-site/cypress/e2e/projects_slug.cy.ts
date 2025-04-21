import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import type {
  GenericEntryFrontmatter,
  GetEntryOptions,
} from '@/cypress/tasks/getEntryFrontmatter'
import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'

const CONTENT_FOLDER = 'projects'

describe('Projects Slug Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<GenericEntryFrontmatter>('getEntryFrontmatter', {
        collection: CONTENT_FOLDER,
        slug,
      } satisfies GetEntryOptions).then(({ title, seo }) => {
        const seoTitle = seo.title || title

        tests.metadata.fn({
          path: `${PATHS.PROJECTS.path}/${slug}`,
          title: getMetaTitleWithSuffix(seoTitle),
          description: seo.description,
          baseUrl: BASE_URL,
        })
      })
    })
  })
})
