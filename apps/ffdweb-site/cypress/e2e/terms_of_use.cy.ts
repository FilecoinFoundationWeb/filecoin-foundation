import { PATHS } from '@/constants/paths'

import { tests } from '@/support/index'
import { TERMS_OF_USE_SEO } from '@/terms-of-use/constants/seo'

describe('Terms of Use Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.TERMS_OF_USE.path,
      title: TERMS_OF_USE_SEO.title,
      description: TERMS_OF_USE_SEO.description,
    })
  })
})
