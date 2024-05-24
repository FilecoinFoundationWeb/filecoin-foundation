type BlogPostPath = `/blog/${string}`
type EcosystemPath = `/ecosystem/${string}`
type EventPath = `/events/${string}`

export type DynamicPathValues = BlogPostPath | EcosystemPath | EventPath

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

interface PathObjectParams {
  path: PathValues
  label: string
  includesEntries?: boolean
  customMainContentPath?: string
  customEntriesContentPath?: string
}

const CONTENT_ROOT = 'src/content'
export const CONTENT_PAGES_ROOT = `${CONTENT_ROOT}/pages`

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
  ECOSYSTEM: createPathObject({
    path: '/ecosystem',
    label: 'Ecosystem Explorer',
    includesEntries: true,
    customEntriesContentPath: '/ecosystem/projects/',
  }),
  EVENTS: createPathObject({
    path: '/events',
    label: 'Events',
    includesEntries: true,
  }),
  GOVERNANCE: createPathObject({ path: '/governance', label: 'Governance' }),
  GRANTS: createPathObject({ path: '/grants', label: 'Grants' }),
  HOME: createPathObject({
    path: '/',
    label: 'Home',
    customMainContentPath: '/home',
  }),
  PRIVACY_POLICY: createPathObject({
    path: '/privacy-policy',
    label: 'Privacy Policy',
  }),
  TERMS: createPathObject({ path: '/terms', label: 'Terms and Conditions' }),
} as const

export const ECOSYSTEM_CATEGORIES_DIRECTORY_PATH = `${CONTENT_ROOT}${PATHS.ECOSYSTEM.path}/categories`
