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

type BlogSlug = {
  draft: string
  published: string
}

describe('Blog Slug Page', () => {
  it('should return 404 for draft posts', () => {
    cy.fixture('blogSlug').then((slugs: BlogSlug) => {
      cy.request({
        url: `${BLOG_PATH}/${slugs.draft}`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404)
      })
    })
  })

  it('should have valid metadata for any random published post', () => {
    cy.task<string>('getRandomPublishedSlug', ENGLISH_CONTENT_FOLDER).then(
      (slug) => {
        cy.task<BlogPostFrontmatter>(
          'getEntryFrontmatter',
          `${ENGLISH_CONTENT_FOLDER}/${slug}`,
        ).then(({ title, seo, excerpt }) => {
          tests.metadata.fn({
            path: `${BLOG_PATH}/${slug}`,
            title: getMetaTitleWithSuffix(seo?.title ?? title),
            description: seo?.description ?? excerpt,
            baseUrl: BASE_URL,
          })
        })
      },
    )
  })
})

describe('Blog Post - Visual Regression', () => {
  it(tests.visualSnapshot.prompt, () => {
    cy.fixture('blogSlug').then((slugs: { published: string }) => {
      tests.visualSnapshot.fn(path.join(BLOG_PATH, slugs.published))
    })
  })
})
