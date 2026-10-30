import type { WebPage, WithContext } from 'schema-dts'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import type { DigestArticleEntry } from '@/qino/collections/digestArticles'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

export function generateStructuredData(
  data: DigestArticleEntry,
): WithContext<WebPage> {
  const { seo, articlePath } = data

  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: `${PATHS.DIGEST.path}/${articlePath}` as DynamicPathValues,
  })
}
