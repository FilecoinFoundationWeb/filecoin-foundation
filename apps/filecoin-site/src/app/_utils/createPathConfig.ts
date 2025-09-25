import { type StaticPath } from '@/constants/paths'

type PathConfig = {
  path: StaticPath
  label: string
}

type PathConfigWithEntries = PathConfig & {
  entriesPath: string
}

export function createPathConfig(path: StaticPath, label: string): PathConfig

export function createPathConfig(
  path: StaticPath,
  label: string,
  options: { entriesPath: string },
): PathConfigWithEntries

export function createPathConfig(
  path: StaticPath,
  label: string,
  options?: { entriesPath: string },
): PathConfig | PathConfigWithEntries {
  if (options?.entriesPath) {
    return {
      path,
      label,
      entriesPath: options.entriesPath,
    }
  }

  return {
    path,
    label,
  }
}
