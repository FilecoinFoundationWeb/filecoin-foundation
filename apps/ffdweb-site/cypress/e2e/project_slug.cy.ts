import { PATHS } from '@/constants/paths'

import { tests } from '@/support/index'

describe('Project Slug', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', 'project').then((slug) => {
      tests.metadata.fn({
        path: `${PATHS.PROJECTS.path}/${slug}`,
        title: 'Test Title',
        description: 'Test Description',
      })
    })
  })
})
