import { tests } from '@filecoin-foundation/cypress/support'
import type { PageFrontmatterSeo } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleTemplate } from '@/cypress/utils/getMetaTitleTemplate'

const { contentPath, path } = PATHS.FIL_PLUS

describe('Filecoin Plus Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>('getPageFrontmatterSeo', contentPath).then(
      (seo) => {
        const metaTitleTemplate = getMetaTitleTemplate(seo.title)

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
