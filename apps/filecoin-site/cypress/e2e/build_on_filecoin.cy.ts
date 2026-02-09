import translations from '@/i18n/translations/en.json'

import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

const { path } = PATHS.BUILD_ON_FILECOIN

describe('Build on Filecoin Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path,
      title: translations['build-on-filecoin'].metadata.title,
      description: translations['build-on-filecoin'].metadata.description,
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
