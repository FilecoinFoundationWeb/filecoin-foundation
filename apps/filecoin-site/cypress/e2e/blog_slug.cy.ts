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
const ENGLISH_CONTENT_FOLDER = path.join(CONTENT_FOLDER, 'en')

describe('Blog Slug Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', ENGLISH_CONTENT_FOLDER).then((slug) => {
      cy.task<BlogPostFrontmatter>(
        'getEntryFrontmatter',
        `${ENGLISH_CONTENT_FOLDER}/${slug}`,
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
})

describe('Blog Post - Visual Regression', () => {
  const BLOG_POST_SLUG = 'introducing-filecoin-onchain-cloud'

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path.join(BLOG_PATH, BLOG_POST_SLUG))
  })
})
