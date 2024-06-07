import { WebPage, WithContext } from 'schema-dts'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

export function generateStructuredData(
  data: EcosystemProjectData,
): WithContext<WebPage> {
  const { seo } = data

  return generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: `${PATHS.ECOSYSTEM_EXPLORER.path}/${data.slug}` as DynamicPathValues,
  })
}
