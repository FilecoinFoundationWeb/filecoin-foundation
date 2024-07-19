import { WebPage, WithContext } from 'schema-dts'

import { DigestData } from '@/types/digestTypes'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

export function generateStructuredData(data: DigestData): WithContext<WebPage> {
  const { seo } = data

  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: `${PATHS.DIGEST.path}/${data.slug}` as DynamicPathValues,
  })
}
