import translations from '@/i18n/translations/en.json'

import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

const { path } = PATHS.PROVIDE_STORAGE_ONBOARDING

describe('Provide Storage - Onboarding Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path,
      title: translations['provide-storage-onboarding'].metadata.title,
      description: translations['provide-storage-onboarding'].metadata.description,
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
