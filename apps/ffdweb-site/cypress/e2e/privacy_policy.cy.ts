import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleTemplate } from '@/cypress/utils/getMetaTitleTemplate'
import { PRIVACY_POLICY_SEO } from '@/privacy-policy/constants/seo'

describe('Privacy Policy Page', () => {
  it(tests.metadata.prompt, () => {
    const metaTitleTemplate = getMetaTitleTemplate(PRIVACY_POLICY_SEO.title)

    tests.metadata.fn({
      path: PATHS.PRIVACY_POLICY.path,
      title: metaTitleTemplate,
      description: PRIVACY_POLICY_SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(PATHS.PRIVACY_POLICY.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(PATHS.PRIVACY_POLICY.path)
  })
})
