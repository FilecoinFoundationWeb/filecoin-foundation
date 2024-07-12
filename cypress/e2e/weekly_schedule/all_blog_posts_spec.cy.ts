import { PATHS } from '../../../src/app/_constants/paths'
import { verifyAllEntryLinks } from '../../support/verifyAllEntryLinksUtil'

describe('All Blog Posts', () => {
  it('should check links', () => {
    verifyAllEntryLinks(
      PATHS.BLOG.entriesContentPath as string,
      PATHS.BLOG.path as string,
    )
  })
})
