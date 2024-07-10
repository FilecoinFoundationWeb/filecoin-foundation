import { PATHS } from '../../../src/app/_constants/paths'
import { getAllSlugs } from '../../support/getAllSlugsUtil'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('All Blog Page', function () {
  it('should check links of all blog pages', function () {
    const BlogDirectoryPath = PATHS.BLOG.entriesContentPath as string

    getAllSlugs(BlogDirectoryPath).then((slugs) => {
      slugs.forEach((slug) => {
        cy.log('Testing Slug:', slug)

        verifyLinks(`${PATHS.BLOG.path}/${slug}`)
      })
    })
  })
})
