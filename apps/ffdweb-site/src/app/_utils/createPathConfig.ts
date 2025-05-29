import { CONTENT_ROOT, type StaticPath } from '@/constants/paths'

interface PathConfigWithEntries {
  path: StaticPath
  label: string
  entriesPath: string
}

interface PathConfigWithoutEntries {
  path: StaticPath
  label: string
}

// Function overloads
export function createPathConfig(
  path: StaticPath,
  label: string,
): PathConfigWithoutEntries

export function createPathConfig(
  path: StaticPath,
  label: string,
  cmsConfig: { hasEntries: true },
): PathConfigWithEntries

export function createPathConfig(
  path: StaticPath,
  label: string,
  cmsConfig?: { hasEntries?: boolean },
): PathConfigWithEntries | PathConfigWithoutEntries {
  const { hasEntries } = cmsConfig || {}

  if (hasEntries) {
    return {
      path,
      label,
      entriesPath: `${CONTENT_ROOT}${path}`,
    } as const
  }

  return { path, label } as const
}
