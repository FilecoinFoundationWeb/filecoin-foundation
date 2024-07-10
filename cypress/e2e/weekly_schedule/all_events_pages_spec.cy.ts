import { PATHS } from '../../../src/app/_constants/paths'
import { getAllSlugs } from '../../support/getAllSlugsUtil'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('All Events Pages', function () {
  it('should check links of all events pages', function () {
    const ecosystemExplorerDirectoryPath = PATHS.EVENTS
      .entriesContentPath as string

    getAllSlugs(ecosystemExplorerDirectoryPath).then((slugs) => {
      slugs.forEach((slug) => {
        cy.log('Testing Slug:', slug)

        verifyLinks(`${PATHS.EVENTS.path}/${slug}`)
      })
    })
  })
})
