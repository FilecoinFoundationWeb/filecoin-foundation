import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL, SEO } from '@/constants/siteMetadata'

import { getMetaTitleTemplate } from '@/cypress/utils/getMetaTitleTemplate'

describe('Home Page', () => {
  it(tests.metadata.prompt, () => {
    const metaTitleWithSuffix = getMetaTitleTemplate(SEO.title)

    tests.metadata.fn({
      path: PATHS.HOME.path,
      title: metaTitleWithSuffix,
      description: SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.HOME.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.HOME.path)
  })
})
