const REQUEST_DENIED_STATUS_CODE = 999
const CLIENT_ERROR_THRESHOLD = 400

export function verifyLinks(path: string) {
  cy.visit(path)

  cy.get('a').each(($link) => {
    const href = $link.prop('href')

    if (!href || href.includes('mailto:')) return

    const linkUrl = new URL(href, window.location.origin)
    const isExternalLink = linkUrl.origin !== window.location.origin

    if (isExternalLink) {
      verifyExternalLink(href)
    }
  })
}

function verifyExternalLink(url: string) {
  cy.request({ url, failOnStatusCode: false, timeout: 60000 }).then(
    (response) => {
      if (isClientOrServerError(response.status)) {
        const errorMessage = getErrorMessage(response)
        cy.log(`Broken link: ${url} - ${errorMessage}`)
      }
    },
  )
}

function isClientOrServerError(status: number) {
  return (
    status >= CLIENT_ERROR_THRESHOLD && status !== REQUEST_DENIED_STATUS_CODE
  )
}

function getErrorMessage(response: Cypress.Response<any>) {
  return `Status code: ${response.status} (${response.statusText})`
}
