import { PATHS } from '@/constants/paths'

import type { Frontmatter } from '../types/frontmatter'

import { tests } from '@/support/index'

const CONTENT_FOLDER = 'projects'

describe('Project Slug', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<Frontmatter>('getEntryFrontmatter', {
        folder: CONTENT_FOLDER,
        slug,
      }).then(({ title, seo }) => {
        tests.metadata.fn({
          path: `${PATHS.PROJECTS.path}/${slug}`,
          title: seo.title || title,
          description: seo.description,
        })
      })
    })
  })
})
