type BlogPostPath = `/blog/${string}`
type EcosystemPath = `/ecosystem/${string}`
type EventPath = `/events/${string}`

export type DynamicPathValues = BlogPostPath | EcosystemPath | EventPath

export type PathValues =
  | '/'
  | '/about'
  | '/blog'
  | '/ecosystem-explorer'
  | '/employee-privacy-policy'
  | '/events'
  | '/filecoin-plus'
  | '/governance'
  | '/grants'
  | '/orbit'
  | '/privacy-policy'
  | '/security'
  | '/security/coordinated-disclosure-policy'
  | '/terms-of-use'
export interface PathConfig {
  path: PathValues
  label: string
  mainContentPath: string
  entriesContentPath?: string
}

interface CMSConfig {
  includesEntries?: boolean
  customMainContentPath?: string
  customEntriesContentPath?: string
  hasSubpaths?: boolean
}

const CONTENT_ROOT = 'src/content'
const CONTENT_PAGES_ROOT = `${CONTENT_ROOT}/pages`

function createPathObject(
  path: PathValues,
  label: string,
  cmsConfig: CMSConfig = {},
): PathConfig {
  const {
    includesEntries = false,
    customMainContentPath,
    customEntriesContentPath,
    hasSubpaths = false,
  } = cmsConfig

  const mainContentPath = hasSubpaths
    ? `${CONTENT_PAGES_ROOT}${path}${path}`
    : `${CONTENT_PAGES_ROOT}${customMainContentPath ?? path}`

  const entriesContentPath = includesEntries
    ? `${CONTENT_ROOT}${customEntriesContentPath ?? path}`
    : undefined

  return {
    path,
    label,
    mainContentPath,
    entriesContentPath,
  }
}

export const PATHS = {
  ABOUT: createPathObject('/about', 'About'),
  BLOG: createPathObject('/blog', 'Blog', {
    includesEntries: true,
  }),
  COORDINATED_DISCLOSURE_POLICY: createPathObject(
    '/security/coordinated-disclosure-policy',
    'Coordinated Disclosure Policy',
  ),
  ECOSYSTEM_EXPLORER: createPathObject(
    '/ecosystem-explorer',
    'Ecosystem Explorer',
    {
      includesEntries: true,
      customEntriesContentPath: '/ecosystem-explorer/projects/',
    },
  ),
  EMPLOYEE_PRIVACY_POLICY: createPathObject(
    '/employee-privacy-policy',
    'Employee Privacy Policy',
  ),
  EVENTS: createPathObject('/events', 'Events', {
    includesEntries: true,
  }),
  FIL_PLUS: createPathObject('/filecoin-plus', 'Filecoin Plus'),
  GOVERNANCE: createPathObject('/governance', 'Governance'),
  GRANTS: createPathObject('/grants', 'Grants'),
  ORBIT: createPathObject('/orbit', 'Orbit'),
  HOME: createPathObject('/', 'Home', {
    customMainContentPath: '/home',
  }),
  PRIVACY_POLICY: createPathObject('/privacy-policy', 'Privacy Policy'),
  TERMS_OF_USE: createPathObject('/terms-of-use', 'Terms of Use'),
  SECURITY: createPathObject('/security', 'Security', {
    hasSubpaths: true,
  }),
} as const

export const ECOSYSTEM_CATEGORIES_DIRECTORY_PATH = `${CONTENT_ROOT}${PATHS.ECOSYSTEM_EXPLORER.path}/categories`
export const ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH = `${CONTENT_ROOT}${PATHS.ECOSYSTEM_EXPLORER.path}/subcategories`
export const ECOSYSTEM_PROJECTS_DIRECTORY_PATH = `${CONTENT_ROOT}${PATHS.ECOSYSTEM_EXPLORER.path}/projects`
