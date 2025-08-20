import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { ABOUT_SEO } from '@/about/constants/seo'
import { tests } from '@/cypress/support'

describe('About Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.ABOUT.path,
      title: ABOUT_SEO.title,
      description: ABOUT_SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.ABOUT.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.ABOUT.path)
  })
})
