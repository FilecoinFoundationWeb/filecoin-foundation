import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { PROVIDE_STORAGE_SEO } from '@/provide-storage/constants/seo'

const { path } = PATHS.PROVIDE_STORAGE
const { title, description } = PROVIDE_STORAGE_SEO

const excludedLinks = ['ndlabs.io']

describe('Provide Storage Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path,
      title,
      description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(path, excludedLinks)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
  })
})
