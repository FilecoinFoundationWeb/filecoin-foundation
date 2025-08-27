import { tests } from '@filecoin-foundation/cypress/support'
import { getMetaTitleTemplate } from '@filecoin-foundation/cypress/utils'
import type { PageFrontmatterSeo } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ROOT_METADATA } from '@/constants/siteMetadata'

const { contentPath, path } = PATHS.PRIVACY_POLICY

describe('Privacy Policy Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>('getPageFrontmatterSeo', contentPath).then(
      (seo) => {
        const metaTitleTemplate = getMetaTitleTemplate({
          title: seo.title,
          rootMetadata: ROOT_METADATA,
        })

        tests.metadata.fn({
          path,
          title: metaTitleTemplate,
          description: seo.description,
          baseUrl: BASE_URL,
        })
      },
    )
  })

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
  })
})
