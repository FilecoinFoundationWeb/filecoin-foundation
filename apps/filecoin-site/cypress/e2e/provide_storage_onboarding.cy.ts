import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { PROVIDE_STORAGE_ONBOARDING_SEO } from '@/provide-storage/onboarding/constants/seo'

const { path } = PATHS.PROVIDE_STORAGE_ONBOARDING
const { title, description } = PROVIDE_STORAGE_ONBOARDING_SEO

describe('Provide Storage - Onboarding Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path,
      title,
      description,
      baseUrl: BASE_URL,
      excludeMetadata: {
        og: ['image'],
        twitter: ['image'],
      },
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
  })
})
