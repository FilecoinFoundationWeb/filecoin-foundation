type BlogPostPath = `/blog/${string}`
type DigestPath = `/digest/${string}`
type EcosystemPath = `/ecosystem/${string}`
type EventPath = `/events/${string}`

export type DynamicPathValues =
  | BlogPostPath
  | DigestPath
  | EcosystemPath
  | EventPath

export type PathValues =
  | '/'
  | '/about'
  | '/blog'
  | '/digest'
  | '/ecosystem-explorer'
  | '/employee-privacy-policy'
  | '/events'
  | '/filecoin-plus'
  | '/governance'
  | '/grants'
  | '/orbit'
  | '/privacy-policy'
  | '/security'
  | '/security/bug-bounty'
  | '/security/coordinated-disclosure-policy'
  | '/security/maturity-model'
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

function createPathConfig(
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
  ABOUT: createPathConfig('/about', 'About'),
  BLOG: createPathConfig('/blog', 'Blog', {
    includesEntries: true,
  }),
  BUG_BOUNTY: createPathConfig('/security/bug-bounty', 'Bug Bounty Program'),
  COORDINATED_DISCLOSURE_POLICY: createPathConfig(
    '/security/coordinated-disclosure-policy',
    'Coordinated Disclosure Policy',
  ),
  DIGEST: createPathConfig('/digest', 'Digest', {
    includesEntries: true,
  }),
  ECOSYSTEM_EXPLORER: createPathConfig(
    '/ecosystem-explorer',
    'Ecosystem Explorer',
    {
      includesEntries: true,
      customEntriesContentPath: '/ecosystem-explorer/projects/',
    },
  ),
  EMPLOYEE_PRIVACY_POLICY: createPathConfig(
    '/employee-privacy-policy',
    'Employee Privacy Policy',
  ),
  EVENTS: createPathConfig('/events', 'Events', {
    includesEntries: true,
  }),
  FIL_PLUS: createPathConfig('/filecoin-plus', 'Filecoin Plus'),
  GOVERNANCE: createPathConfig('/governance', 'Governance'),
  GRANTS: createPathConfig('/grants', 'Grants'),
  ORBIT: createPathConfig('/orbit', 'Orbit'),
  HOME: createPathConfig('/', 'Home', {
    customMainContentPath: '/home',
  }),
  MATURITY_MODEL: createPathConfig(
    '/security/maturity-model',
    'Maturity Model',
  ),
  PRIVACY_POLICY: createPathConfig('/privacy-policy', 'Privacy Policy'),
  TERMS_OF_USE: createPathConfig('/terms-of-use', 'Terms of Use'),
  SECURITY: createPathConfig('/security', 'Security', {
    hasSubpaths: true,
  }),
} as const

export const ECOSYSTEM_CATEGORIES_DIRECTORY_PATH = `${CONTENT_ROOT}${PATHS.ECOSYSTEM_EXPLORER.path}/categories`
export const ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH = `${CONTENT_ROOT}${PATHS.ECOSYSTEM_EXPLORER.path}/subcategories`
export const ECOSYSTEM_PROJECTS_DIRECTORY_PATH = `${CONTENT_ROOT}${PATHS.ECOSYSTEM_EXPLORER.path}/projects`
