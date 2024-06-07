import { verifyCanonicalLink } from '../../cypress/support/canonicalLinkUtil'
import { PATHS } from '../../src/app/_constants/paths'

describe('Single Blog Post Page', function () {
  it('should check metadata of the first blog post', function () {
    cy.visit(PATHS.BLOG.path)

    cy.get(`a[href*="${PATHS.BLOG.path}/"]`)
      .first()
      .invoke('attr', 'href')
      .then((href) => {
        if (typeof href === 'string') {
          cy.visit(href)

          verifyCanonicalLink(href)
        } else {
          throw new Error('href is undefined')
        }
      })
  })
})
