import { createPathConfig } from '@/utils/createPathConfig'

export const WORKSPACE_ROOT = 'apps/uxit'

export type StaticPath = '/' | '/site-audit-reports'

export const PATHS = {
  HOME: createPathConfig('/', 'Home'),
  SITE_AUDIT_REPORTS: createPathConfig(
    '/site-audit-reports',
    'Site Audit Reports',
  ),
} as const
