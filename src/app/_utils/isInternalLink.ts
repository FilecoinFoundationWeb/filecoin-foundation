/**
 * Determines if a given URL is an internal link.
 *
 * @param {string} href The URL to check.
 * @return {boolean} True if the URL is internal, false otherwise.
 */

export function isInternalLink(href: string) {
  return href.startsWith('/') || href.startsWith('#')
}
