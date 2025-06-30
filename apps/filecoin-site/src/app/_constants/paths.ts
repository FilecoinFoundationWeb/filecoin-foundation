import { createPathConfig } from '@/utils/createPathConfig'

export type StaticPath = '/' | '/build-on-filecoin'

export const PATHS = {
  HOME: createPathConfig('/', 'Home'),
  BUILD_ON_FILECOIN: createPathConfig(
    '/build-on-filecoin',
    'Build on Filecoin',
  ),
} as const
