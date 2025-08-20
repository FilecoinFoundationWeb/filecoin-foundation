import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { getMetaTitleTemplate } from '@/cypress/utils/getMetaTitleTemplate'
import { PRIVACY_POLICY_SEO } from '@/privacy-policy/constants/seo'

describe('Privacy Policy Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.PRIVACY_POLICY.path,
      title: getMetaTitleTemplate(PRIVACY_POLICY_SEO.title),
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
