import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleTemplate } from '@/cypress/utils/getMetaTitleTemplate'
import { TERMS_OF_USE_SEO } from '@/terms-of-use/constants/seo'

describe('Terms of Use Page', () => {
  it(tests.metadata.prompt, () => {
    const metaTitleTemplate = getMetaTitleTemplate(TERMS_OF_USE_SEO.title)

    tests.metadata.fn({
      path: PATHS.TERMS_OF_USE.path,
      title: metaTitleTemplate,
      description: TERMS_OF_USE_SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.TERMS_OF_USE.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.TERMS_OF_USE.path)
  })
})
