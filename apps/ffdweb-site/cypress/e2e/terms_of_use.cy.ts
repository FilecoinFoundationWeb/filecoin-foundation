import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { getMetaTitleTemplate } from '@/cypress/utils/getMetaTitleTemplate'
import { TERMS_OF_USE_SEO } from '@/terms-of-use/constants/seo'

describe('Terms of Use Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.TERMS_OF_USE.path,
      title: getMetaTitleTemplate(TERMS_OF_USE_SEO.title),
      description: TERMS_OF_USE_SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.TERMS_OF_USE.path,
    })
  })
})
