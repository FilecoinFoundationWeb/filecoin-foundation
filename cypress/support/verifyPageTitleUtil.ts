import { PATHS } from '../../src/app/_constants/paths'
import { ORGANIZATION_NAME } from '../../src/app/_constants/siteMetadata'

export function verifyPageTitle(
  path: string,
  seoTitle: string,
  overrideDefaultTitle: boolean,
) {
  const expectedTitle = overrideDefaultTitle
    ? seoTitle
    : path === PATHS.HOME.path
      ? `${ORGANIZATION_NAME} | Decentralized Storage Solutions`
      : `${seoTitle} | ${ORGANIZATION_NAME}`

  cy.title().should('eq', expectedTitle)
}
