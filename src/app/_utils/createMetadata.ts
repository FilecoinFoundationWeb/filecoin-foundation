import { Metadata } from 'next'

import { isDynamicPath } from '@/utils/pathUtils'

import { PathValues, DynamicPathValues } from '@/constants/paths'
import { SITE_TITLE_SUFFIX } from '@/constants/siteMetadata'

interface CreateMetadataProps {
  seo?: Partial<Metadata>
  title?: string
  description?: string | string[]
  path: PathValues | DynamicPathValues
}

export function createMetadata({
  seo = {},
  title,
  description,
  path,
}: CreateMetadataProps): Metadata {
  const baseTitle = seo.title || title
  const metaTitle = isDynamicPath(path)
    ? `${baseTitle} ${SITE_TITLE_SUFFIX}`
    : baseTitle
  const metaDescription = seo.description || description?.toString()

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: path,
    },
  }
}
