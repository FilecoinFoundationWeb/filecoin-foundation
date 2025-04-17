import { PATHS } from '@/constants/paths'

import { BLOG_SEO } from '@/blog/constants/seo'
import { tests } from '@/support/index'

describe('Blog Index Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.BLOG.path,
      title: { absolute: BLOG_SEO.title },
      description: BLOG_SEO.description,
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.BLOG.path,
    })
  })
})
