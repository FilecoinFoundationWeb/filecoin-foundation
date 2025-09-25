import { CONTENT_PATH, type StaticPath } from '@/constants/paths'

type BasePathConfig = {
  path: StaticPath
  label: string
}

type PathConfigWithEntries = BasePathConfig & {
  entriesPath: string
}

export function createPathConfig(
  path: StaticPath,
  label: string,
): BasePathConfig

export function createPathConfig(
  path: StaticPath,
  label: string,
  options: { hasEntries: true },
): PathConfigWithEntries

export function createPathConfig(
  path: StaticPath,
  label: string,
  options?: { hasEntries?: boolean },
): PathConfigWithEntries | BasePathConfig {
  const hasEntries = options?.hasEntries ?? false

  if (hasEntries) {
    return {
      path,
      label,
      entriesPath: CONTENT_PATH,
    }
  }
  return {
    path,
    label,
  } as const
}
