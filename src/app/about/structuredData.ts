import { WebPage, WithContext } from 'schema-dts'

import { SeoMetadata } from '@/types/metadataTypes'

import { generateWebPageStructuredData } from '@/utils/baseStructuredData'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME } from '@/constants/siteMetadata'

export const generateAboutPageStructuredData = (
  seo: SeoMetadata,
): WithContext<WebPage> => {
  const aboutPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.ABOUT.path,
  })

  return {
    ...aboutPageBaseData,
    about: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
    },
  }
}
