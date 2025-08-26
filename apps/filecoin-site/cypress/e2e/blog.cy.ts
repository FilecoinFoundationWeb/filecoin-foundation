import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { BLOG_SEO } from '@/blog/constants/seo'
import { tests } from '@/cypress/support'

const { path } = PATHS.BLOG
const { title, description } = BLOG_SEO

describe('Blog Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path,
      title,
      description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
  })
})
