import { WebPage, WithContext } from 'schema-dts'

import { generateWebPageStructuredData, seo } from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'

export const generateEcosystemProjectPostStructuredData =
  (): WithContext<WebPage> => {
    const ecosystemProjectBaseData = generateWebPageStructuredData({
      title: seo.title,
      description: seo.description,
      path: PATHS.ECOSYSTEM.path,
    })

    return {
      ...ecosystemProjectBaseData,
    }
  }
