import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME_SHORT } from '@/constants/siteMetadata'

import type { GenericFrontmatter } from '../types/frontmatter'

import { tests } from '@/support/index'

const CONTENT_FOLDER = 'digest'

describe('Digest Slug Page', () => {
  it(tests.metadata.prompt, () => {
    cy.task<string>('getRandomSlug', CONTENT_FOLDER).then((slug) => {
      cy.task<GenericFrontmatter>('getEntryFrontmatter', {
        folder: CONTENT_FOLDER,
        slug,
      }).then(({ title, seo }) => {
        const seoTitle = seo.title || title
        tests.metadata.fn({
          path: `${PATHS.DIGEST.path}/${slug}`,
          title: { absolute: `${seoTitle} | ${ORGANIZATION_NAME_SHORT}` },
          description: seo.description,
        })
      })
    })
  })
})
