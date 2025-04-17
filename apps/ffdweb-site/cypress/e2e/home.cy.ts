import { PATHS } from '@/constants/paths'
import { SEO } from '@/constants/siteMetadata'

import { tests } from '@/support/index'

describe('Home Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.HOME.path,
      title: SEO.title,
      description: SEO.description,
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.HOME.path,
    })
  })
})
