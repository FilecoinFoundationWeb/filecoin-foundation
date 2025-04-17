import { PATHS } from '@/constants/paths'

import { FAQS_SEO } from '@/faqs/constants/seo'
import { tests } from '@/support/index'

describe('FAQs Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: PATHS.FAQS.path,
      title: { absolute: FAQS_SEO.title },
      description: FAQS_SEO.description,
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn({
      path: PATHS.FAQS.path,
    })
  })
})
