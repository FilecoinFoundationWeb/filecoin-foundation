import { tests } from '@filecoin-foundation/cypress/support'
import { getMetaTitleTemplate } from '@filecoin-foundation/cypress/utils'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ROOT_METADATA, SEO } from '@/constants/siteMetadata'

describe('Home Page', () => {
  it(tests.metadata.prompt, () => {
    const metaTitleWithSuffix = getMetaTitleTemplate({
      title: SEO.title,
      rootMetadata: ROOT_METADATA,
    })

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
