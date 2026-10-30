import '@percy/cypress'

const IMAGE_WARMUP_TIMEOUT_MS = 120000

export function testVisualSnapshot(path: string) {
  cy.visit(path)

  warmOptimizedImages()

  cy.window().then({ timeout: 60000 }, () => {
    try {
      cy.percySnapshot()
    } catch (error) {
      cy.log('Percy snapshot failed, continuing tests', error)
    }
  })
}

// Percy drops loading="lazy" and renders every image at once, so on image-heavy
// pages a cold Next.js image optimizer can exceed Percy's 30s page load timeout.
// Requesting each optimized variant first means Percy is served from cache.
function warmOptimizedImages() {
  cy.window().then({ timeout: IMAGE_WARMUP_TIMEOUT_MS }, async (win) => {
    const urls = getOptimizedImageUrls(win.document)
    await Promise.allSettled(urls.map((url) => win.fetch(url)))
  })
}

function getOptimizedImageUrls(document: Document) {
  const candidates = Array.from(document.querySelectorAll('img')).flatMap(
    (image) => [
      image.getAttribute('src'),
      ...(image.getAttribute('srcset') ?? '')
        .split(',')
        .map((candidate) => candidate.trim().split(' ')[0]),
    ],
  )

  return [
    ...new Set(
      candidates.filter((url): url is string =>
        Boolean(url?.startsWith('/_next/image')),
      ),
    ),
  ]
}
