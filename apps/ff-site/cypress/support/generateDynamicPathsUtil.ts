import type { DynamicPathValues, PathValues } from '@/constants/paths'

export function generateDynamicPaths(
  basePaths: { entriesContentPath?: string; path: PathValues },
  slug: string,
) {
  if (!basePaths.entriesContentPath) {
    throw new Error(
      'entriesContentPath is required to generate contentFilePath',
    )
  }

  return {
    contentFilePath: `${basePaths.entriesContentPath}/${slug}.md`,
    pageUrl: `${basePaths.path}/${slug}` as DynamicPathValues,
  }
}
