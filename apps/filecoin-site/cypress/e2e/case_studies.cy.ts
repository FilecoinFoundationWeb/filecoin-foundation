import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { CASE_STUDIES_SEO } from '@/case-studies/constants/seo'
import { tests } from '@/cypress/support'

describe('Case Studies Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.CASE_STUDIES.path,
      title: CASE_STUDIES_SEO.title,
      description: CASE_STUDIES_SEO.description,
      baseUrl: BASE_URL,
      excludeMetadata: {
        og: ['image'],
        twitter: ['image'],
      },
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.CASE_STUDIES.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.CASE_STUDIES.path)
  })
})
