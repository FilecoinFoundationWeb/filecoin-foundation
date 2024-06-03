import { WebPage, WithContext } from 'schema-dts'

import { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'

export const generateEventsPageStructuredData = (
  seo: SeoMetadata,
): WithContext<WebPage> => {
  const eventsPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.EVENTS.path,
  })

  return {
    ...eventsPageBaseData,
  }
}
