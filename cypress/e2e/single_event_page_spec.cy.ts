import { PATHS } from '../../src/app/_constants/paths'
import { getRandomSlug } from '../support/getRandomSlugUtil'
import { verifyMetadata } from '../support/verifyMetadataUtil'

describe('Random Events Page', function () {
  it('should check metadata of a random events page', function () {
    const eventsDirectoryPath = PATHS.EVENTS.entriesContentPath as string

    cy.log('Events Directory Path:', eventsDirectoryPath)

    getRandomSlug(eventsDirectoryPath).then((slug) => {
      verifyMetadata(eventsDirectoryPath, `${PATHS.EVENTS.path}/${slug}`, slug)
    })
  })
})
