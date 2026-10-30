import type { ExternalLinkResult } from '@filecoin-foundation/cypress/tasks'

const REQUEST_DENIED_STATUS_CODE = 999
const CLIENT_ERROR_THRESHOLD = 400
const TASK_TIMEOUT_MS = 40000

export function verifyLinks(path: string, excludedLinks?: string[]) {
  cy.visit(path)

  cy.get('a').each(($link) => {
    const href = $link.prop('href')

    if (!href || href.includes('mailto:')) return

    const linkUrl = new URL(href, window.location.origin)
    const isExternalLink = linkUrl.origin !== window.location.origin
    const isExcluded = excludedLinks?.some((excludedLink) =>
      href.includes(excludedLink),
    )

    if (isExternalLink && !isExcluded) {
      verifyExternalLink(href)
    }
  })
}

// Requests run in Node so a slow or unreachable third-party host is logged
// instead of failing the run (cy.request always throws on timeout)
function verifyExternalLink(url: string) {
  cy.task<ExternalLinkResult>('requestExternalLink', url, {
    timeout: TASK_TIMEOUT_MS,
  }).then((result) => {
    if ('error' in result) {
      cy.log(`Unreachable link: ${url} - ${result.error}`)
      return
    }

    if (isClientOrServerError(result.status)) {
      cy.log(`Broken link: ${url} - ${getErrorMessage(result)}`)
    }
  })
}

function isClientOrServerError(status: number) {
  return (
    status >= CLIENT_ERROR_THRESHOLD && status !== REQUEST_DENIED_STATUS_CODE
  )
}

function getErrorMessage({
  status,
  statusText,
}: {
  status: number
  statusText: string
}) {
  return `Status code: ${status} (${statusText})`
}
