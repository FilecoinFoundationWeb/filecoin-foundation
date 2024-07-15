import { PATHS } from '../../../src/app/_constants/paths'
import { verifyAllEventLinks } from '../../support/verifyAllEntryLinksUtil'

describe('All Event Entries', () => {
  it('should check links', () => {
    verifyAllEventLinks(
      PATHS.EVENTS.entriesContentPath as string,
      PATHS.EVENTS.path as string,
    )
  })
})
