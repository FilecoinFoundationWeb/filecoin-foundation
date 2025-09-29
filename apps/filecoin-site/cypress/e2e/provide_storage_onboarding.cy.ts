import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { PROVIDE_STORAGE_ONBOARDING_SEO } from '@/[locale]/provide-storage/onboarding/constants/seo'

const { path } = PATHS.PROVIDE_STORAGE_ONBOARDING
const { title, description } = PROVIDE_STORAGE_ONBOARDING_SEO

describe('Provide Storage - Onboarding Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path,
      title,
      description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
  })
})
