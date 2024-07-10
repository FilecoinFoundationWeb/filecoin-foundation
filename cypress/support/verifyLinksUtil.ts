export function verifyLinks(path: string) {
  cy.visit(path)

  cy.get('a').each((link) => {
    const href = link.prop('href')

    if (href && !href.includes('mailto:')) {
      cy.request({ url: href, failOnStatusCode: false }).then((response) => {
        if (response.status >= 400) {
          cy.log(`Broken link: ${href} - Status code: ${response.status}`)
        }
      })
    }
  })
}
