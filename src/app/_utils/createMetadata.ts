import { Metadata } from 'next'

import { PathValues, DynamicPathValues } from '@/constants/paths'

interface CreateMetadataProps {
  path: PathValues | DynamicPathValues
  title?: string
  description?: string | string[]
  seo?: Partial<Metadata>
  useAbsoluteTitle?: boolean
}

export function createMetadata({
  path,
  title,
  description,
  seo = {},
  useAbsoluteTitle = false,
}: CreateMetadataProps): Metadata {
  const resolvedMetaTitle = seo.title || title || ''
  const resolvedMetaDescription =
    seo.description ||
    (Array.isArray(description) ? description.join(' ') : description) ||
    ''

  return {
    title: useAbsoluteTitle
      ? { absolute: resolvedMetaTitle.toString() }
      : resolvedMetaTitle,
    description: resolvedMetaDescription,
    alternates: {
      canonical: path,
    },
  }
}
