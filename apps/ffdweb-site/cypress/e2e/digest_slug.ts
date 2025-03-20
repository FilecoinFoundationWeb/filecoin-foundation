import { PATHS } from '@/constants/paths'

import { tests } from '@/support/index'

describe('Digest Slug', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', 'digest').then((slug) => {
      tests.metadata.fn({
        path: `${PATHS.DIGEST.path}/${slug}`,
        title: 'Test Title',
        description: 'Test Description',
      })
    })
  })
})
