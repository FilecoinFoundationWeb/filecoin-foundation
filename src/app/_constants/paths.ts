export type BlogPostsPath = `blog/${string}`
export type CaseStudiesPath = `case-studies/${string}`
export type EventsPath = `events/${string}`

export type DynamicPathValues = BlogPostsPath | CaseStudiesPath | EventsPath

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
  | '/policy'
  | '/public-data/awards'
  | '/public-data'
  | '/terms'
  | DynamicPathValues

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
  includesEntries: boolean = false
): PathConfig {
  const config: PathConfig = {
    path,
    label,
    mainContentPath: `${CONTENT_PAGES_ROOT}${path}`,
  }

  if (includesEntries) {
    config.entriesContentPath = `${CONTENT_ROOT}${path}`
  }

  return config
}

export const PATHS = {
  ABOUT: createPathObject('/about', 'About Us'),
  BLOG: createPathObject('/blog', 'Blog', true),
  CASE_STUDIES: createPathObject('/case-studies', 'Case Studies', true),
  ECOSYSTEM: createPathObject('/ecosystem', 'Ecosystem'),
  EVENTS: createPathObject('/events', 'Events', true),
  GET_INVOLVED: createPathObject('/get-involved', 'Get Involved'),
  GOVERNANCE: createPathObject('/governance', 'Governance'),
  GRANTS: createPathObject('/grants', 'Grants'),
  HOME: createPathObject('/', 'Home'),
  POLICY: createPathObject('/policy', 'Policy'),
  PUBLIC_DATA_AWARDS: createPathObject(
    '/public-data/awards',
    'Public Data Awards'
  ),
  PUBLIC_DATA: createPathObject('/public-data', 'Public Data'),
  TERMS: createPathObject('/terms', 'Terms and Conditions'),
} as const
