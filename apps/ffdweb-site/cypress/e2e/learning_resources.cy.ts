import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { LEARNING_RESOURCES_SEO } from '@/learning-resources/constants/seo'

describe('Learning Resources Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.LEARNING_RESOURCES.path,
      title: LEARNING_RESOURCES_SEO.title,
      description: LEARNING_RESOURCES_SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.LEARNING_RESOURCES.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.LEARNING_RESOURCES.path,
    })
  })
})
