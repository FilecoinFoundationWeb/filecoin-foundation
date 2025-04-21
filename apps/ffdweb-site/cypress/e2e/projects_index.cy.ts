import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { PROJECTS_SEO } from '@/projects/constants/seo'

describe('Projects Index Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.PROJECTS.path,
      title: PROJECTS_SEO.title,
      description: PROJECTS_SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.PROJECTS.path,
    })
  })
})
