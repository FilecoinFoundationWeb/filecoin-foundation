import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { PRIVACY_POLICY_SEO } from '@/privacy-policy/constants/seo'

const { path } = PATHS.PRIVACY_POLICY
const { title, description } = PRIVACY_POLICY_SEO

describe('Privacy Policy Page', () => {
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
