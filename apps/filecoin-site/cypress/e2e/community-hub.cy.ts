import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { COMMUNITY_SEO } from '@/community-hub/constants/seo'
import { tests } from '@/cypress/support'

describe('Community Hub Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.COMMUNITY_HUB.path,
      title: COMMUNITY_SEO.title,
      description: COMMUNITY_SEO.description,
      baseUrl: BASE_URL,
      excludeMetadata: {
        og: ['image'],
        twitter: ['image'],
      },
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.COMMUNITY_HUB.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.COMMUNITY_HUB.path)
  })
})
