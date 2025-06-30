import { createPathConfig } from '@/utils/createPathConfig'

export type StaticPath = '/' | '/build-on-filecoin' | '/store-data'

export const PATHS = {
  HOME: createPathConfig('/', 'Home'),
  BUILD_ON_FILECOIN: createPathConfig(
    '/build-on-filecoin',
    'Build on Filecoin',
  ),
  STORE_DATA: createPathConfig('/store-data', 'Store Data'),
} as const
