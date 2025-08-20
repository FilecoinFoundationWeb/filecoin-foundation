import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { DIGEST_SEO } from '@/digest/constants/seo'

describe('Digest Index Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.DIGEST.path,
      title: DIGEST_SEO.title,
      description: DIGEST_SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.DIGEST.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.DIGEST.path,
    })
  })
})
