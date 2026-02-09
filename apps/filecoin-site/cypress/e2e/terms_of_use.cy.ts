import translations from '@/i18n/translations/en.json'

import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

const { path } = PATHS.TERMS_OF_USE

describe('Terms of Use Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path,
      title: translations['terms-of-use'].metadata.title,
      description: translations['terms-of-use'].metadata.description,
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
