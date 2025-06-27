import { createPathConfig } from '@/utils/createPathConfig'

export type StaticPath = '/'

export const PATHS = {
  HOME: createPathConfig('/', 'Home'),
} as const
