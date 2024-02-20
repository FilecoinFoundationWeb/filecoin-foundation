import { Metadata } from 'next'

import { createMetadata } from '@/utils/createMetadata'

import { DynamicPathValues } from '@/constants/paths'

export function generateDynamicContentMetadata({
  basePath,
  slug,
  data,
}: {
  basePath: string
  slug: string
  data: { title: string; f_description?: string }
}): Metadata {
  const seo = {
    title: data.title,
    description: data.f_description,
  }

  const path = `${basePath}/${slug}` as DynamicPathValues

  return createMetadata(seo, path)
}
