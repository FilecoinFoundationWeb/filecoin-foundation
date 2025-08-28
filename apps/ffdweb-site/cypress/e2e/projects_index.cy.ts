import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

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

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.PROJECTS.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.PROJECTS.path)
  })
})
