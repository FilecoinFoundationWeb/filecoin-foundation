import path from 'path'

import { tests } from '@filecoin-foundation/cypress/support'
import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getMetaTitleWithSuffix } from '@/cypress/utils/getMetaTitleWithSuffix'

type BlogPostFrontmatter = GenericEntryFrontmatter & {
  excerpt: string
}

const { entriesPath: CONTENT_FOLDER, path: BLOG_PATH } = PATHS.BLOG

describe('Blog Slug Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<BlogPostFrontmatter>(
        'getEntryFrontmatter',
        path.join(CONTENT_FOLDER, slug),
      ).then(({ title, seo, excerpt }) => {
        const seoTitle = seo?.title || title
        const metaTitleWithSuffix = getMetaTitleWithSuffix(seoTitle)

        tests.metadata.fn({
          path: `${BLOG_PATH}/${slug}`,
          title: metaTitleWithSuffix,
          description: seo?.description || excerpt,
          baseUrl: BASE_URL,
        })
      })
    })
  })

  it(tests.links.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      tests.links.fn(`${BLOG_PATH}/${slug}`)
    })
  })

  it(tests.visualSnapshot.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      tests.visualSnapshot.fn(`${BLOG_PATH}/${slug}`)
    })
  })
})
