import { createMetadata } from '@/utils/createMetadata'

import { PathValues } from '@/constants/paths'

type DynamicContentMetadata = {
  basePath: PathValues
  data: { title: string; description?: string; slug: string }
}

export function generateDynamicContentMetadata({
  basePath,
  data,
}: DynamicContentMetadata) {
  const seo = {
    title: data.title,
    description: data.description,
  }

  if (
    basePath == '/blog' ||
    basePath == '/case-studies' ||
    basePath == '/events'
  ) {
    return createMetadata(seo, `${basePath}/${data.slug}`)
  }

  return createMetadata(seo, basePath)
}
