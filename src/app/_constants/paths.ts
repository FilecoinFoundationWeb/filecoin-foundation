export const PATHS = {
  ABOUT: '/about',
  BLOG: '/blog',
  CASE_STUDIES: '/case-studies',
  CONTACT: '/contact',
  ECOSYSTEM: '/ecosystem',
  EVENTS: '/events',
  GET_INVOLVED: '/get-involved',
  GOVERNANCE: '/governance',
  GRANTS: '/grants',
  HOME: '/',
  POLICY: '/policy',
  PUBLIC_DATA_AWARDS: '/public-data/awards',
  PUBLIC_DATA: '/public-data',
  TERMS: '/terms',
} as const

type PathKeys = keyof typeof PATHS

type DynamicPathValues =
  | `${typeof PATHS.BLOG}/${string}`
  | `${typeof PATHS.CASE_STUDIES}/${string}`
  | `${typeof PATHS.EVENTS}/${string}`

export type PathValues = (typeof PATHS)[PathKeys] | DynamicPathValues

const CONTENT_ROOT = 'src/content'
const CONTENT_PAGES_ROOT = `${CONTENT_ROOT}/pages`

export const CONTENT_PATHS: Record<
  PathKeys,
  { POSTS?: string; CONTENT: string }
> = {
  ABOUT: {
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.ABOUT}`,
  },
  BLOG: {
    POSTS: `${CONTENT_ROOT}${PATHS.BLOG}`,
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.BLOG}`,
  },
  CASE_STUDIES: {
    POSTS: `${CONTENT_ROOT}${PATHS.CASE_STUDIES}`,
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.CASE_STUDIES}`,
  },
  CONTACT: {
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.CONTACT}`,
  },
  ECOSYSTEM: {
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.ECOSYSTEM}`,
  },
  EVENTS: {
    POSTS: `${CONTENT_ROOT}${PATHS.EVENTS}`,
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.EVENTS}`,
  },
  GET_INVOLVED: {
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.GET_INVOLVED}`,
  },
  GOVERNANCE: {
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.GOVERNANCE}`,
  },
  GRANTS: {
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.GRANTS}`,
  },
  HOME: {
    CONTENT: `${CONTENT_PAGES_ROOT}/home`,
  },
  POLICY: {
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.POLICY}`,
  },
  PUBLIC_DATA_AWARDS: {
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.PUBLIC_DATA_AWARDS}`,
  },
  PUBLIC_DATA: {
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.PUBLIC_DATA}`,
  },
  TERMS: {
    CONTENT: `${CONTENT_PAGES_ROOT}${PATHS.TERMS}`,
  },
} as const
