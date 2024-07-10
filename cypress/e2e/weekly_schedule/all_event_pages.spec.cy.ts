import { PATHS } from '../../../src/app/_constants/paths'
import { getAllSlugs } from '../../support/getAllSlugsUtil'
import { verifyLinks } from '../../support/verifyLinksUtil'

describe('Random Events Page', function () {
  it('should check links of all events pages', function () {
    const eventsDirectoryPath = PATHS.EVENTS.entriesContentPath as string

    getAllSlugs(eventsDirectoryPath).then((slugs) => {
      slugs.forEach((slug) => {
        cy.log('Testing Slug:', slug)

        verifyLinks(`${PATHS.EVENTS.path}/${slug}`)
      })
    })
  })
})
