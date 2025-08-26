import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { PROVIDE_STORAGE_ONBOARDING_SEO } from '@/provide-storage/onboarding/constants/seo'

describe('Onboarding Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.PROVIDE_STORAGE_ONBOARDING.path,
      title: PROVIDE_STORAGE_ONBOARDING_SEO.title,
      description: PROVIDE_STORAGE_ONBOARDING_SEO.description,
      baseUrl: BASE_URL,
      excludeMetadata: {
        og: ['image'],
        twitter: ['image'],
      },
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.PROVIDE_STORAGE_ONBOARDING.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.PROVIDE_STORAGE_ONBOARDING.path)
  })
})
