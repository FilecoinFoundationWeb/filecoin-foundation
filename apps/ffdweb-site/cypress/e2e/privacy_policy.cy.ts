import { PATHS } from '@/constants/paths'

import { PRIVACY_POLICY_SEO } from '@/privacy-policy/constants/seo'
import { tests } from '@/support/index'

describe('Privacy Policy', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.PRIVACY_POLICY.path,
      title: PRIVACY_POLICY_SEO.title,
      description: PRIVACY_POLICY_SEO.description,
    })
  })
})
