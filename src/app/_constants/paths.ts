type BlogPostPath = `/blog/${string}`
type EcosystemPath = `/ecosystem/${string}`
type EventPath = `/events/${string}`

export type DynamicPathValues = BlogPostPath | EcosystemPath | EventPath

export type PathValues =
  | '/about'
  | '/blog'
  | '/ecosystem-explorer'
  | '/employee-privacy-policy'
  | '/events'
  | '/governance'
  | '/orbit'
  | '/grants'
  | '/'
  | '/privacy-policy'
  | '/terms-of-use'
  | '/security'
  | '/security/coordinated-disclosure-policy'

export interface PathConfig {
  path: PathValues
  label: string
  mainContentPath: string
  entriesContentPath?: string
}

interface PathObjectParams {
  path: PathValues
  label: string
  includesEntries?: boolean
  customMainContentPath?: string
  customEntriesContentPath?: string
}

const CONTENT_ROOT = 'src/content'
const CONTENT_PAGES_ROOT = `${CONTENT_ROOT}/pages`

function createPathObject({
  path,
  label,
  includesEntries = false,
  customMainContentPath,
  customEntriesContentPath,
}: PathObjectParams): PathConfig {
  const config: PathConfig = {
    path,
    label,
    mainContentPath: `${CONTENT_PAGES_ROOT}${customMainContentPath ?? path}`,
  }
  if (includesEntries) {
    config.entriesContentPath = `${CONTENT_ROOT}${customEntriesContentPath ?? path}`
  }

  return config
}

export const PATHS = {
  ABOUT: createPathObject({ path: '/about', label: 'About' }),
  BLOG: createPathObject({
    path: '/blog',
    label: 'Blog',
    includesEntries: true,
  }),
  ECOSYSTEM_EXPLORER: createPathObject({
    path: '/ecosystem-explorer',
    label: 'Ecosystem Explorer',
    includesEntries: true,
    customEntriesContentPath: '/ecosystem-explorer/projects/',
  }),
  EMPLOYEE_PRIVACY_POLICY: createPathObject({
    path: '/employee-privacy-policy',
    label: 'Employee Privacy Policy',
  }),
  EVENTS: createPathObject({
    path: '/events',
    label: 'Events',
    includesEntries: true,
  }),
  GOVERNANCE: createPathObject({ path: '/governance', label: 'Governance' }),
  GRANTS: createPathObject({ path: '/grants', label: 'Grants' }),
  ORBIT: createPathObject({ path: '/orbit', label: 'Orbit' }),
  HOME: createPathObject({
    path: '/',
    label: 'Home',
    customMainContentPath: '/home',
  }),
  PRIVACY_POLICY: createPathObject({
    path: '/privacy-policy',
    label: 'Privacy Policy',
  }),
  TERMS_OF_USE: createPathObject({
    path: '/terms-of-use',
    label: 'Terms of Use',
  }),
  SECURITY: createPathObject({
    path: '/security',
    label: 'Security',
  }),
  SECURITY: createPathObject({
    path: '/security',
    label: 'Security',
  }),
  COORDINATED_DISCLOSURE_POLICY: createPathObject({
    path: '/security/coordinated-disclosure-policy',
    label: 'Coordinated Disclosure Policy',
  }),
} as const

export const ECOSYSTEM_CATEGORIES_DIRECTORY_PATH = `${CONTENT_ROOT}${PATHS.ECOSYSTEM_EXPLORER.path}/categories`
