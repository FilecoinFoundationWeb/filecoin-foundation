import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME_SHORT } from '@/constants/siteMetadata'

import type {
  GenericEntryFrontmatter,
  GetEntryOptions,
} from '../tasks/getEntryFrontmatter'

import { tests } from '@/support/index'

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
          title: { absolute: `${seoTitle} | ${ORGANIZATION_NAME_SHORT}` },
          description: seo.description,
        })
      })
    })
  })
})
