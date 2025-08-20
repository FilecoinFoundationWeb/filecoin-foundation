import { PATHS } from '@/constants/paths'
import { SEO, BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { getMetaTitleTemplate } from '@/cypress/utils/getMetaTitleTemplate'

describe('Home Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.HOME.path,
      title: getMetaTitleTemplate(SEO.title),
      description: SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.HOME.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.HOME.path,
    })
  })
})
