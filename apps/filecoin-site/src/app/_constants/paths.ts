import { createPathConfig } from '@/utils/createPathConfig'

export type StaticPath =
  | '/'
  | '/build-on-filecoin'
  | '/offer-storage'
  | '/store-data'

export const PATHS = {
  BUILD_ON_FILECOIN: createPathConfig(
    '/build-on-filecoin',
    'Build on Filecoin',
  ),
  HOME: createPathConfig('/', 'Home'),
  OFFER_STORAGE: createPathConfig('/offer-storage', 'Offer Storage'),
  STORE_DATA: createPathConfig('/store-data', 'Store Data'),
} as const
