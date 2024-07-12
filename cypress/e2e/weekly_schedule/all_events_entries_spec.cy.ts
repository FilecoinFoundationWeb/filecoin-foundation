import { PATHS } from '../../../src/app/_constants/paths'
import { verifyAllEntryLinks } from '../../support/verifyAllEntryLinksUtil'

describe('All Event Entries', () => {
  it('should check links', () => {
    verifyAllEntryLinks(
      PATHS.EVENTS.entriesContentPath as string,
      PATHS.EVENTS.path as string,
    )
  })
})
