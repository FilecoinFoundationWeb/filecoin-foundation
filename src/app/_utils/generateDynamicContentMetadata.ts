import { createMetadata } from '@/utils/createMetadata'

import { PathValues } from '@/constants/paths'

type DynamicContentMetadata = {
  path: PathValues
  data: { title: string; description?: string; slug: string }
}

export function generateDynamicContentMetadata({
  path,
  data,
}: DynamicContentMetadata) {
  const seo = {
    title: data.title,
    description: data.description,
  }

  if (path == '/blog' || path == '/case-studies' || path == '/events') {
    return createMetadata(seo, `${path}/${data.slug}`)
  }

  return createMetadata(seo, path)
}
