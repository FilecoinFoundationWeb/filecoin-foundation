import { PATHS } from '@/constants/paths'

import { LEARNING_RESOURCES_SEO } from '@/learning-resources/constants/seo'
import { tests } from '@/support/index'

describe('Learning Resources Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.LEARNING_RESOURCES.path,
      title: LEARNING_RESOURCES_SEO.title,
      description: LEARNING_RESOURCES_SEO.description,
    })
  })
})
