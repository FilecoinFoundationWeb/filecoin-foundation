import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { CASE_STUDIES_SEO } from '@/case-studies/constants/seo'
import { tests } from '@/cypress/support'

const { path } = PATHS.CASE_STUDIES
const { title, description } = CASE_STUDIES_SEO

describe('Case Studies Page', () => {
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
