import type { WebPage, WithContext } from 'schema-dts'

import type { DigestArticleData } from '@/types/digestTypes'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'


export function generateStructuredData(
  data: DigestArticleData,
): WithContext<WebPage> {
  const { seo } = data

  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: `${PATHS.DIGEST.path}/${data.slug}` as DynamicPathValues,
  })
}
