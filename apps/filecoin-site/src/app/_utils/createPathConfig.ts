import { CONTENT_ROOT, PATHS, type StaticPath } from '@/constants/paths'

type PathConfigWithEntries = {
  path: StaticPath
  label: string
  entriesPath: string
}

type PathConfigWithoutEntries = {
  path: StaticPath
  label: string
}

type PathWithCustomLabel = {
  path: StaticPath
  label: string
}

export function createPathConfig(
  path: StaticPath,
  label: string,
): PathConfigWithoutEntries

export function createPathConfig(
  path: StaticPath,
  label: string,
  options: { hasEntries: true },
): PathConfigWithEntries

export function createPathConfig(
  path: StaticPath,
  label: string,
  options?: { hasEntries?: boolean },
): PathConfigWithEntries | PathConfigWithoutEntries {
  const hasEntries = options?.hasEntries ?? false

  if (hasEntries) {
    return {
      path,
      label,
      entriesPath: `${CONTENT_ROOT}${path}`,
    }
  }
  return {
    path,
    label,
  } as const
}

export function createPathWithCustomLabel<T extends keyof typeof PATHS>(
  pathKey: T,
  customLabel: string,
): PathWithCustomLabel {
  return {
    path: PATHS[pathKey].path,
    label: customLabel,
  }
}
