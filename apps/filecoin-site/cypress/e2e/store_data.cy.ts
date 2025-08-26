import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { STORE_DATA_SEO } from '@/store-data/constants/seo'

describe('Store Data Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.STORE_DATA.path,
      title: STORE_DATA_SEO.title,
      description: STORE_DATA_SEO.description,
      baseUrl: BASE_URL,
      excludeMetadata: {
        og: ['image'],
        twitter: ['image'],
      },
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.STORE_DATA.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.STORE_DATA.path)
  })
})
