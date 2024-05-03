export type BlogPostPath = `/blog/${string}`
export type EventPath = `/events/${string}`

export type DynamicPathValues = BlogPostPath | EventPath

export type PathValues =
  | '/about'
  | '/blog'
  | '/ecosystem'
  | '/events'
  | '/governance'
  | '/grants'
  | '/'
  | '/privacy-policy'
  | '/terms'

export interface PathConfig {
  path: PathValues
  label: string
  mainContentPath: string
  entriesContentPath?: string
}

export const CONTENT_ROOT = 'src/content'
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
  ECOSYSTEM: createPathObject('/ecosystem', 'Ecosystem', true),
  EVENTS: createPathObject('/events', 'Events', true),
  GOVERNANCE: createPathObject('/governance', 'Governance'),
  GRANTS: createPathObject('/grants', 'Grants'),
  HOME: createPathObject('/', 'Home', false, '/home'),
  PRIVACY_POLICY: createPathObject('/privacy-policy', 'Privacy Policy'),
  TERMS: createPathObject('/terms', 'Terms and Conditions'),
} as const
