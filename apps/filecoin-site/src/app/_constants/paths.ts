import { DEFAULT_LOCALE } from '@/i18n/locales'

import type { AppRoutes } from '@/next/types/routes'

export type NextRouteWithoutLocale = TurnDynamicSegmentsIntoString<
  RemoveLocalePrefix<AppRoutes>
>

export type PathConfig = {
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
  PROVIDE_STORAGE: {
    path: '/provide-storage',
    label: 'Provide Storage',
  },
  STORE_DATA_TALK_TO_EXPERT: {
    path: '/store-data/talk-to-expert',
    label: 'Talk to an Expert',
  },
  PROVIDE_STORAGE_ONBOARDING: {
    path: '/provide-storage/onboarding',
    label: 'Onboarding',
  },
} as const satisfies Record<string, PathConfig>

const RSS_ROUTE = `/rss.xml`

export function getBlogRSSPath(locale: string) {
  return locale === DEFAULT_LOCALE
    ? `${PATHS.BLOG.path}${RSS_ROUTE}`
    : `${PATHS.BLOG.path}/${locale}${RSS_ROUTE}`
}

type RemoveLocalePrefix<Routes extends string> =
  Routes extends `/[locale]${infer Rest}`
    ? Rest extends ''
      ? '/'
      : Rest
    : never

type TurnDynamicSegmentsIntoString<T extends string> =
  T extends `${infer Start}[${string}]${infer Rest}`
    ? `${Start}${string}${TurnDynamicSegmentsIntoString<Rest>}`
    : T
