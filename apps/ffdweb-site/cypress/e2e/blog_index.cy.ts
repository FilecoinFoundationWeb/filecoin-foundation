import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { BLOG_SEO } from '@/blog/constants/seo'
import { tests } from '@/cypress/support'

describe('Blog Index Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.BLOG.path,
      title: BLOG_SEO.title,
      description: BLOG_SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.BLOG.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.BLOG.path,
    })
  })
})
