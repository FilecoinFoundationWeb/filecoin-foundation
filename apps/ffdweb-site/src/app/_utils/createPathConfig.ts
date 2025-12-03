import { type StaticPath } from '@/constants/paths'

type PathConfig = {
  path: StaticPath
  label: string
}

type PathConfigWithEntry = PathConfig & {
  entriesPath: string
}

export function createPathConfig(path: StaticPath, label: string): PathConfig

export function createPathConfig(
  path: StaticPath,
  label: string,
  options: { entriesPath: string },
): PathConfigWithEntry

export function createPathConfig(
  path: StaticPath,
  label: string,
  options?: { entriesPath: string },
): PathConfigWithEntry | PathConfig {
  if (options?.entriesPath) {
    return { path, label, entriesPath: options.entriesPath }
  }

  return { path, label }
}
