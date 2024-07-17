export function verifyLinks(path: string) {
  cy.visit(path)

  cy.get('a').each(($link) => {
    const href = $link.prop('href')

    if (href && !href.includes('mailto:')) {
      const linkUrl = new URL(href, window.location.origin)
      const isExternal = linkUrl.origin !== window.location.origin

      if (isExternal) {
        cy.request({ url: href, failOnStatusCode: false }).then((response) => {
          if (!response || response.status >= 400) {
            let errorMessage = response
              ? `Status code: ${response.status}`
              : 'No response received or request timed out'
            cy.log(`Broken link: ${href} - ${errorMessage}`)
          }
        })
      }
    }
  })
}
