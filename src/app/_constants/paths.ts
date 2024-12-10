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
  | '/ecosystem-explorer/project-form'
  | '/employee-privacy-policy'
  | '/events'
  | '/filecoin-plus'
  | '/filecoin-plus/allocators'
  | '/governance'
  | '/governance/govhub'
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

export const CONTENT_ROOT = 'src/content'
const CONTENT_PAGES_ROOT = `${CONTENT_ROOT}/pages`
export const MARKDOWN_EXTENSION = '.md'

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
  ALLOCATORS: createPathConfig('/filecoin-plus/allocators', 'Allocators'),
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
      hasSubpaths: true,
      includesEntries: true,
      customEntriesContentPath: '/ecosystem-explorer/projects/',
    },
  ),
  ECOSYSTEM_EXPLORER_PROJECT_FORM: createPathConfig(
    '/ecosystem-explorer/project-form',
    'Ecosystem Explorer Project Form',
  ),
  EMPLOYEE_PRIVACY_POLICY: createPathConfig(
    '/employee-privacy-policy',
    'Employee Privacy Policy',
  ),
  EVENTS: createPathConfig('/events', 'Events', {
    includesEntries: true,
  }),
  FIL_PLUS: createPathConfig('/filecoin-plus', 'Filecoin Plus', {
    hasSubpaths: true,
  }),
  GOVERNANCE: createPathConfig('/governance', 'Governance', {
    hasSubpaths: true,
  }),
  GOVHUB: createPathConfig('/governance/govhub', 'GovHub'),
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

export const ECOSYSTEM_PROJECTS_DIRECTORY_PATH = `${CONTENT_ROOT}${PATHS.ECOSYSTEM_EXPLORER.path}/projects`
