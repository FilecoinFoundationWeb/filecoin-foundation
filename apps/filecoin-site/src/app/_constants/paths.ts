import { createPathConfig } from '@/utils/createPathConfig'

export type StaticPath =
  | '/'
  | '/blog'
  | '/build-on-filecoin'
  | '/offer-storage'
  | '/learn'
  | '/store-data'
  | '/privacy-policy'

export const PATHS = {
  BLOG: createPathConfig('/blog', 'Blog'),
  BUILD_ON_FILECOIN: createPathConfig(
    '/build-on-filecoin',
    'Build on Filecoin',
  ),
  HOME: createPathConfig('/', 'Home'),
  OFFER_STORAGE: createPathConfig('/offer-storage', 'Offer Storage'),
  LEARN: createPathConfig('/learn', 'Learn'),
  STORE_DATA: createPathConfig('/store-data', 'Store Data'),
  PRIVACY_POLICY: createPathConfig('/privacy-policy', 'Privacy Policy'),
} as const
