type RemoveLocalePrefix<Routes extends string> =
  Routes extends `/${string}${infer Rest}`
    ? Rest extends ''
      ? '/'
      : Rest
    : never

type NextRoute = __next_route_internal_types__.DynamicRoutes
export type NextRouteWithoutLocale = RemoveLocalePrefix<NextRoute>

type PathConfig = {
  path: NextRouteWithoutLocale
  label: string
  entriesPath?: string
}

export const CONTENT_ROOT = 'content'

export const PATHS = {
  BLOG: {
    path: '/blog',
    label: 'Blog',
    entriesPath: `${CONTENT_ROOT}/blog/posts`,
  },
  BUILD_ON_FILECOIN: {
    path: '/build-on-filecoin',
    label: 'Build on Filecoin',
  },
  CASE_STUDIES: {
    path: '/case-studies',
    label: 'Case Studies',
    entriesPath: `${CONTENT_ROOT}/case-studies`,
  },
  COMMUNITY_HUB: {
    path: '/community-hub',
    label: 'Community Hub',
  },
  HOME: {
    path: '/',
    label: 'Home',
  },
  LEARN: {
    path: '/learn',
    label: 'Learn',
  },
  STORE_DATA: {
    path: '/store-data',
    label: 'Store Data',
  },
  PRIVACY_POLICY: {
    path: '/privacy-policy',
    label: 'Privacy Policy',
  },
  PROVIDE_STORAGE: {
    path: '/provide-storage',
    label: 'Provide Storage',
  },
  PROVIDE_STORAGE_ONBOARDING: {
    path: '/provide-storage/onboarding',
    label: 'Onboarding',
  },
  TERMS_OF_USE: {
    path: '/terms-of-use',
    label: 'Terms of Use',
  },
} as const satisfies Record<string, PathConfig>

export const BLOG_RSS_PATH = `${PATHS.BLOG.path}/rss.xml`
