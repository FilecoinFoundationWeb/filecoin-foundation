import { PATHS } from '@/constants/paths'

import { ABOUT_SEO } from '@/about/constants/seo'
import { tests } from '@/support/index'

describe('About Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.ABOUT.path,
      title: ABOUT_SEO.title,
      description: ABOUT_SEO.description,
    })
  })
})
