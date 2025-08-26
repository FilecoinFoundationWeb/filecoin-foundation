import { PATHS } from '@/constants/paths'
import { BASE_URL, SEO } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'

describe('Home Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.HOME.path,
      title: SEO.title,
      description: SEO.description,
      baseUrl: BASE_URL,
      excludeMetadata: {
        og: ['image'],
        twitter: ['image'],
      },
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.HOME.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.HOME.path)
  })
})
