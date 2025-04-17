import { PATHS } from '@/constants/paths'

import { PROJECTS_SEO } from '@/projects/constants/seo'
import { tests } from '@/support/index'

describe('Projects Index Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.PROJECTS.path,
      title: { absolute: PROJECTS_SEO.title },
      description: PROJECTS_SEO.description,
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.PROJECTS.path,
    })
  })
})
