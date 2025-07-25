import { createPathConfig } from '@/utils/createPathConfig'

export type StaticPath =
  | '/'
  | '/blog'
  | '/build-on-filecoin'
  | '/offer-storage'
  | '/offer-storage/onboarding'
  | '/learn'
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
  HOME: createPathConfig('/', 'Home'),
  OFFER_STORAGE: createPathConfig('/offer-storage', 'Offer Storage'),
  OFFER_STORAGE_ONBOARDING: createPathConfig(
    '/offer-storage/onboarding',
    'Onboarding',
  ),
  LEARN: createPathConfig('/learn', 'Learn'),
  STORE_DATA: createPathConfig('/store-data', 'Store Data'),
  PRIVACY_POLICY: createPathConfig('/privacy-policy', 'Privacy Policy'),
  TERMS_OF_USE: createPathConfig('/terms-of-use', 'Terms of Use'),
} as const
