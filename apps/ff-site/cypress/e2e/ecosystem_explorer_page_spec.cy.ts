import { tests } from '@filecoin-foundation/cypress/support'
import { getMetaTitleTemplate } from '@filecoin-foundation/cypress/utils'
import type { PageFrontmatterSeo } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ROOT_METADATA } from '@/constants/siteMetadata'

describe('Ecosystem Explorer Page', () => {
  const { contentPath, path } = PATHS.ECOSYSTEM_EXPLORER

  it(tests.metadata.prompt, () => {
    cy.task<PageFrontmatterSeo>('getPageFrontmatterSeo', contentPath).then(
      (seo) => {
        tests.metadata.fn({
          path,
          title: seo.title,
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

describe.skip('Ecosystem Explorer Project Form Page', () => {
  const { contentPath, path } = PATHS.ECOSYSTEM_EXPLORER_PROJECT_FORM

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
