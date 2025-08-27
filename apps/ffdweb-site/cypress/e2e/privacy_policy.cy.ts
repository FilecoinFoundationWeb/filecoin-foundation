import { tests } from '@filecoin-foundation/cypress/support'
import { getMetaTitleTemplate } from '@filecoin-foundation/cypress/utils'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ROOT_METADATA } from '@/constants/siteMetadata'

import { PRIVACY_POLICY_SEO } from '@/privacy-policy/constants/seo'

describe('Privacy Policy Page', () => {
  it(tests.metadata.prompt, () => {
    const metaTitleTemplate = getMetaTitleTemplate({
      title: PRIVACY_POLICY_SEO.title,
      rootMetadata: ROOT_METADATA,
    })

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
