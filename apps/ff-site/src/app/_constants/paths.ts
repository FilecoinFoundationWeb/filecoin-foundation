import { createPathConfig } from '@/utils/createPathConfig'

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
  | '/security/bug-bounty/leaderboard'
  | '/security/coordinated-disclosure-policy'
  | '/security/maturity-model'
  | '/terms-of-use'

export const WORKSPACE_ROOT = 'apps/ff-site'
export const CONTENT_ROOT = 'src/content'
export const CONTENT_PAGES_ROOT = `${CONTENT_ROOT}/pages`

export const PATHS = {
  ABOUT: createPathConfig('/about', 'About'),
  ALLOCATORS: createPathConfig('/filecoin-plus/allocators', 'Allocators'),
  BLOG: createPathConfig('/blog', 'Blog', {
    hasEntries: true,
  }),
  BUG_BOUNTY: createPathConfig('/security/bug-bounty', 'Bug Bounty Program', {
    hasSubpaths: true,
  }),
  COORDINATED_DISCLOSURE_POLICY: createPathConfig(
    '/security/coordinated-disclosure-policy',
    'Coordinated Disclosure Policy',
  ),
  DIGEST: {
    ...createPathConfig('/digest', 'Digest'),
    articlesContentPath: `${CONTENT_ROOT}/digest/articles`,
    issuesContentPath: `${CONTENT_ROOT}/digest/issues`,
  },
  ECOSYSTEM_EXPLORER: createPathConfig(
    '/ecosystem-explorer',
    'Ecosystem Explorer',
    {
      hasSubpaths: true,
      hasEntries: true,
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
    hasEntries: true,
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
    customContentPath: '/home',
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
  SECURITY_BUG_BOUNTY_LEADERBOARD: createPathConfig(
    '/security/bug-bounty/leaderboard',
    'Leaderboard',
  ),
} as const
