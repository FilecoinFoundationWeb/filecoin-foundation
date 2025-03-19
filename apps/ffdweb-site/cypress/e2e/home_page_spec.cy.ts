import { SEO } from '@/constants/siteMetadata'

import { testPageMetaDescription } from '@/support/testPageMetaDescription'
import { testPageMetaTitle } from '@/support/testPageMetaTitle'

describe('Homepage', () => {
  it('should have a meta title and description', () => {
    testPageMetaTitle(SEO.title)
    testPageMetaDescription(SEO.description)
  })
})
