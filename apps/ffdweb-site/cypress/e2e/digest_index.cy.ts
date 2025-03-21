import { PATHS } from '@/constants/paths'

import { DIGEST_SEO } from '@/digest/constants/seo'
import { tests } from '@/support/index'

describe('Digest Index Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.DIGEST.path,
      title: { absolute: DIGEST_SEO.title },
      description: DIGEST_SEO.description,
    })
  })
})
