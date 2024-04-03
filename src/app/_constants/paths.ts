import { Route } from 'next'

export type BlogPostPath = `/blog/${string}`
export type CaseStudyPath = `/case-studies/${string}`
export type EventPath = `/events/${string}`

export type DynamicPathValues = BlogPostPath | CaseStudyPath | EventPath

export type PathValues =
  | '/about'
  | '/blog'
  | '/case-studies'
  | '/ecosystem'
  | '/events'
  | '/get-involved'
  | '/governance'
  | '/grants'
  | '/'
  | '/privacy-policy'
  | '/terms'

const CONTENT_ROOT = 'src/content'
const CONTENT_PAGES_ROOT = `${CONTENT_ROOT}/pages`

function createPathObject<
  P extends PathValues,
  L extends string,
  CP extends string
>(path: P, label: L, customPath?: CP) {
  return {
    path,
    label,
    mainContentPath: `${CONTENT_PAGES_ROOT}${customPath ?? path}`,
    entriesContentPath: `${CONTENT_ROOT}${path}`,
    getPathWithSlugs: function (slugs: Array<string>) {
      return `${path}/${slugs.join('/')}` as Route<`{${P}/${string}}`>
    }
  }
}
export type PathConfig = ReturnType<typeof createPathObject>

export const PATHS = {
  ABOUT: createPathObject('/about', 'About'),
  BLOG: createPathObject('/blog', 'News & Blog'),
  CASE_STUDIES: createPathObject('/case-studies', 'Case Studies'),
  ECOSYSTEM: createPathObject('/ecosystem', 'Ecosystem'),
  EVENTS: createPathObject('/events', 'Events'),
  GET_INVOLVED: createPathObject('/get-involved', 'Get Involved'),
  GOVERNANCE: createPathObject('/governance', 'Governance'),
  GRANTS: createPathObject('/grants', 'Grants'),
  HOME: createPathObject('/', 'Home', '/home'),
  PRIVACY_POLICY: createPathObject('/privacy-policy', 'Privacy Policy'),
  TERMS: createPathObject('/terms', 'Terms and Conditions')
} as const
