import { PATHS } from '@/constants/paths'

import { BLOG_SEO } from '@/blog/constants/seo'
import { tests } from '@/support/index'

describe('Blog Index', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.BLOG.path,
      title: BLOG_SEO.title,
      description: BLOG_SEO.description,
    })
  })
})
