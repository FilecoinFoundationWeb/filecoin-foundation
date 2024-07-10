import { PATHS } from '../../../src/app/_constants/paths'
import { getAllSlugs } from '../../support/getAllSlugsUtil'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('All Blog Pages', function () {
  it('should check links of all blog pages', function () {
    const ecosystemExplorerDirectoryPath = PATHS.BLOG
      .entriesContentPath as string

    getAllSlugs(ecosystemExplorerDirectoryPath).then((slugs) => {
      slugs.forEach((slug) => {
        cy.log('Testing Slug:', slug)

        verifyLinks(`${PATHS.BLOG.path}/${slug}`)
      })
    })
  })
})
