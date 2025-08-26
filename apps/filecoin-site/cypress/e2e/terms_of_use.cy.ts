import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { TERMS_OF_USE_SEO } from '@/terms-of-use/constants/seo'

describe('Terms of Use Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.TERMS_OF_USE.path,
      title: TERMS_OF_USE_SEO.title,
      description: TERMS_OF_USE_SEO.description,
      baseUrl: BASE_URL,
      excludeMetadata: {
        og: ['image'],
        twitter: ['image'],
      },
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.TERMS_OF_USE.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.TERMS_OF_USE.path)
  })
})
