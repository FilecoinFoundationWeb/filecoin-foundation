export const WORKSPACE_ROOT = 'apps/uxit'

type StaticPath = '/' | '/site-audit-reports'

export const PATHS = {
  HOME: createPathConfig('/', 'Home'),
  SITE_AUDIT_REPORTS: createPathConfig(
    '/site-audit-reports',
    'Site Audit Reports',
  ),
} as const

type PathConfig = {
  readonly path: PathValues
  readonly label: string
}

function createPathConfig(path: PathValues, label: string): PathConfig {
  return {
    path,
    label,
  } as const
}

export type PathValues = StaticPath
export type PathConfigKey = keyof typeof PATHS

export function getPathConfig<T extends PathConfigKey>(
  key: T,
): (typeof PATHS)[T] {
  return PATHS[key]
}
