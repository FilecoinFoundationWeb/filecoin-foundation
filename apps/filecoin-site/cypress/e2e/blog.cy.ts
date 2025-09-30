import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { BLOG_SEO } from '../../src/app/[locale]/blog/constants/seo'

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
