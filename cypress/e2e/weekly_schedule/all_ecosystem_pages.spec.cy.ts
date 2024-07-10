import { PATHS } from '../../../src/app/_constants/paths'
import { getAllSlugs } from '../../support/getAllSlugsUtil'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('All Ecosystem Expolorer Pages', function () {
  it('should check links of all ecosystem expolorer pages', function () {
    const ecosystemExplorerDirectoryPath = PATHS.ECOSYSTEM_EXPLORER
      .entriesContentPath as string

    getAllSlugs(ecosystemExplorerDirectoryPath).then((slugs) => {
      slugs.forEach((slug) => {
        cy.log('Testing Slug:', slug)

        verifyLinks(`${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`)
      })
    })
  })
})
