import type { WebPage, WithContext } from 'schema-dts'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import type { DigestArticleData } from '../../types/digestType'

export function generateStructuredData(
  data: DigestArticleData,
): WithContext<WebPage> {
  const { seo } = data

  return generateWebPageStructuredData({
    title: seo.title || data.title,
    description: seo.description,
    path: `${PATHS.DIGEST.path}/${data.slug}` as DynamicPathValues,
  })
}
