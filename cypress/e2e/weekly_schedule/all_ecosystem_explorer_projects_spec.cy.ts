import { PATHS } from '../../../src/app/_constants/paths'
import { verifyAllEntryLinks } from '../../support/verifyAllEntryLinksUtil'

describe('All Ecosystem Explorer Projects', () => {
  it('should check links', () => {
    verifyAllEntryLinks(
      PATHS.ECOSYSTEM_EXPLORER.entriesContentPath as string,
      PATHS.ECOSYSTEM_EXPLORER.path as string,
    )
  })
})
