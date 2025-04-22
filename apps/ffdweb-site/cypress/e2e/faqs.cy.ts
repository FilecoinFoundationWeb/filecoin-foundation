import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { tests } from '@/cypress/support'
import { FAQS_SEO } from '@/faqs/constants/seo'

describe('FAQs Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.FAQS.path,
      title: FAQS_SEO.title,
      description: FAQS_SEO.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.FAQS.path,
    })
  })
})
