import { PATHS } from '../../../src/app/_constants/paths'
import { verifyAllEcosystemProjectLinks } from '../../support/verifyAllEntryLinksUtil'

describe('All Ecosystem Explorer Projects', () => {
  it('should check links with artificial-intelligence category', () => {
    verifyAllEcosystemProjectLinks(
      PATHS.ECOSYSTEM_EXPLORER.entriesContentPath as string,
      PATHS.ECOSYSTEM_EXPLORER.path as string,
      'artificial-intelligence',
    )
  })

  it('should check links with education-academia-health category', () => {
    verifyAllEcosystemProjectLinks(
      PATHS.ECOSYSTEM_EXPLORER.entriesContentPath as string,
      PATHS.ECOSYSTEM_EXPLORER.path as string,
      'education-academia-health',
    )
  })

  it('should check links with finance category', () => {
    verifyAllEcosystemProjectLinks(
      PATHS.ECOSYSTEM_EXPLORER.entriesContentPath as string,
      PATHS.ECOSYSTEM_EXPLORER.path as string,
      'finance',
    )
  })

  it('should check links with media-entertainment category', () => {
    verifyAllEcosystemProjectLinks(
      PATHS.ECOSYSTEM_EXPLORER.entriesContentPath as string,
      PATHS.ECOSYSTEM_EXPLORER.path as string,
      'media-entertainment',
    )
  })

  it('should check links with network category', () => {
    verifyAllEcosystemProjectLinks(
      PATHS.ECOSYSTEM_EXPLORER.entriesContentPath as string,
      PATHS.ECOSYSTEM_EXPLORER.path as string,
      'network',
    )
  })

  it('should check links with public-goods-dweb category', () => {
    verifyAllEcosystemProjectLinks(
      PATHS.ECOSYSTEM_EXPLORER.entriesContentPath as string,
      PATHS.ECOSYSTEM_EXPLORER.path as string,
      'public-goods-dweb',
    )
  })

  it('should check links with science-climate-space category', () => {
    verifyAllEcosystemProjectLinks(
      PATHS.ECOSYSTEM_EXPLORER.entriesContentPath as string,
      PATHS.ECOSYSTEM_EXPLORER.path as string,
      'science-climate-space',
    )
  })

  it('should check links with storage category', () => {
    verifyAllEcosystemProjectLinks(
      PATHS.ECOSYSTEM_EXPLORER.entriesContentPath as string,
      PATHS.ECOSYSTEM_EXPLORER.path as string,
      'storage',
    )
  })

  it('should check links with tooling-productivity category', () => {
    verifyAllEcosystemProjectLinks(
      PATHS.ECOSYSTEM_EXPLORER.entriesContentPath as string,
      PATHS.ECOSYSTEM_EXPLORER.path as string,
      'tooling-productivity',
    )
  })
})
