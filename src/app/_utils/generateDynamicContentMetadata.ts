import { Metadata } from 'next'

import { createMetadata } from '@/utils/createMetadata'

import { DynamicPathValues } from '@/constants/paths'

export function generateDynamicContentMetadata({
  basePath,
  data,
}: {
  basePath: string
  data: { title: string; description?: string; slug: string }
}): Metadata {
  const seo = {
    title: data.title,
    description: data.description,
  }

  const path = `${basePath}/${data.slug}` as DynamicPathValues

  return createMetadata(seo, path)
}
