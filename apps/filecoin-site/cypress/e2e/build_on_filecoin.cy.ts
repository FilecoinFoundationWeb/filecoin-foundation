import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { BUILD_ON_FILECOIN_SEO } from '@/build-on-filecoin/constants/seo'
import { tests } from '@/cypress/support'

describe('Build on Filecoin Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.BUILD_ON_FILECOIN.path,
      title: BUILD_ON_FILECOIN_SEO.title,
      description: BUILD_ON_FILECOIN_SEO.description,
      baseUrl: BASE_URL,
      excludeMetadata: {
        og: ['image'],
        twitter: ['image'],
      },
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.BUILD_ON_FILECOIN.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.BUILD_ON_FILECOIN.path)
  })
})
