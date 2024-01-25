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

type DynamicPathValues =
  | `${typeof PATHS.BLOG}/${string}`
  | `${typeof PATHS.CASE_STUDIES}/${string}`
  | `${typeof PATHS.EVENTS}/${string}`

export type PathValues = (typeof PATHS)[keyof typeof PATHS] | DynamicPathValues
