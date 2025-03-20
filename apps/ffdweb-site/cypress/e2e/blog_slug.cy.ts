import { PATHS } from '@/constants/paths'

import { tests } from '@/support/index'

describe('Blog Slug', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', 'blog').then((slug) => {
      tests.metadata.fn({
        path: `${PATHS.BLOG.path}/${slug}`,
        title: 'Test Title',
        description: 'Test Description',
      })
    })
  })
})
