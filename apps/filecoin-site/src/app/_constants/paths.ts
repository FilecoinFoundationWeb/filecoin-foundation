import { createPathConfig } from '@/utils/createPathConfig'

export type StaticPath =
  | '/'
  | '/blog'
  | '/build-on-filecoin'
  | '/case-studies'
  | '/community-hub'
  | '/learn'
  | '/provide-storage'
  | '/provide-storage/onboarding'
  | '/store-data'
  | '/privacy-policy'
  | '/terms-of-use'

export const CONTENT_ROOT = 'src/content'
export const MARKDOWN_EXTENSION = '.md'

type ContentCollectionName = 'blog'

type DynamicPath = {
  [key in ContentCollectionName]: `/${key}/${string}`
}

export type DynamicPathValues = DynamicPath[keyof DynamicPath]
export type PathValues = StaticPath | DynamicPathValues

export const PATHS = {
  BLOG: createPathConfig('/blog', 'Blog', {
    hasEntries: true,
  }),
  BUILD_ON_FILECOIN: createPathConfig(
    '/build-on-filecoin',
    'Build on Filecoin',
  ),
  CASE_STUDIES: createPathConfig('/case-studies', 'Case Studies'),
  COMMUNITY_HUB: createPathConfig('/community-hub', 'Community Hub'),
  HOME: createPathConfig('/', 'Home'),

  LEARN: createPathConfig('/learn', 'Learn'),
  STORE_DATA: createPathConfig('/store-data', 'Store Data'),
  PRIVACY_POLICY: createPathConfig('/privacy-policy', 'Privacy Policy'),
  PROVIDE_STORAGE: createPathConfig('/provide-storage', 'Provide Storage'),
  PROVIDE_STORAGE_ONBOARDING: createPathConfig(
    '/provide-storage/onboarding',
    'Onboarding',
  ),
  TERMS_OF_USE: createPathConfig('/terms-of-use', 'Terms of Use'),
} as const

export const BLOG_RSS_PATH = `${PATHS.BLOG.path}/rss.xml`
