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
  | '/public-data/awards'
  | '/public-data'
  | '/terms'

export interface PathConfig {
  path: PathValues
  label: string
  mainContentPath: string
  entriesContentPath?: string
}

const CONTENT_ROOT = 'src/content'
const CONTENT_PAGES_ROOT = `${CONTENT_ROOT}/pages`

function createPathObject(
  path: PathValues,
  label: string,
  includesEntries: boolean = false,
  customPath?: string,
): PathConfig {
  const config: PathConfig = {
    path,
    label,
    mainContentPath: `${CONTENT_PAGES_ROOT}${customPath ?? path}`,
  }
  if (includesEntries) {
    config.entriesContentPath = `${CONTENT_ROOT}${path}`
  }

  return config
}

export const PATHS = {
  ABOUT: createPathObject('/about', 'About'),
  BLOG: createPathObject('/blog', 'News & Blog', true),
  CASE_STUDIES: createPathObject('/case-studies', 'Case Studies', true),
  ECOSYSTEM: createPathObject('/ecosystem', 'Ecosystem', true),
  EVENTS: createPathObject('/events', 'Events', true),
  GET_INVOLVED: createPathObject('/get-involved', 'Get Involved'),
  GOVERNANCE: createPathObject('/governance', 'Governance'),
  GRANTS: createPathObject('/grants', 'Grants'),
  HOME: createPathObject('/', 'Home', false, '/home'),
  PRIVACY_POLICY: createPathObject('/privacy-policy', 'Privacy Policy'),
  PUBLIC_DATA_AWARDS: createPathObject(
    '/public-data/awards',
    'Public Data Awards',
    false,
    '/awards',
  ),
  PUBLIC_DATA: createPathObject('/public-data', 'Public Data'),
  TERMS: createPathObject('/terms', 'Terms and Conditions'),
} as const
