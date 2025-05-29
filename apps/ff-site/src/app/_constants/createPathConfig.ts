import { CONTENT_PAGES_ROOT, CONTENT_ROOT, type PathValues } from './paths'

interface BaseCMSConfig {
  customContentPath?: string
  hasSubpaths?: boolean
}

interface CMSConfigWithEntries extends BaseCMSConfig {
  hasEntries: true
}

interface CMSConfigWithoutEntries extends BaseCMSConfig {
  hasEntries?: false
}

export interface PathConfigWithEntries {
  path: PathValues
  label: string
  contentPath: string
  entriesPath: string
}

export interface PathConfigWithoutEntries {
  path: PathValues
  label: string
  contentPath: string
}

// Function overloads
export function createPathConfig(
  path: PathValues,
  label: string,
  cmsConfig: CMSConfigWithEntries,
): PathConfigWithEntries

export function createPathConfig(
  path: PathValues,
  label: string,
  cmsConfig?: CMSConfigWithoutEntries,
): PathConfigWithoutEntries

export function createPathConfig(
  path: PathValues,
  label: string,
  cmsConfig: BaseCMSConfig & { hasEntries?: boolean } = {},
): PathConfigWithEntries | PathConfigWithoutEntries {
  const { hasEntries, customContentPath, hasSubpaths } = cmsConfig

  const contentPath = hasSubpaths
    ? `${CONTENT_PAGES_ROOT}${path}${getPathLeaf(path)}`
    : `${CONTENT_PAGES_ROOT}${customContentPath ?? path}`

  if (hasEntries) {
    return {
      path,
      label,
      contentPath,
      entriesPath: `${CONTENT_ROOT}${path}`,
    }
  }

  return {
    path,
    label,
    contentPath,
  }
}

function getPathLeaf(path: PathValues) {
  const leaf = path.split('/').filter(Boolean).at(-1)

  if (!leaf) {
    throw new Error(`Invalid path: ${path}`)
  }

  return `/${leaf}`
}
