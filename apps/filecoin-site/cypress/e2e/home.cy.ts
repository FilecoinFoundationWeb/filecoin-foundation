import { PATHS } from '@/constants/paths'
import { BASE_URL, SEO } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'

const { path } = PATHS.HOME
const { title, description } = SEO

describe('Home Page', () => {
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
