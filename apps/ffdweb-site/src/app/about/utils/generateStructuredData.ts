import type { WebPage, WithContext } from 'schema-dts'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { generateWebPageStructuredData } from '@/utils/generateWebPageStructuredData'

type GenerateStructuredDataProps = {
  title: string
  description: string
}

export function generateStructuredData({
  title,
  description,
}: GenerateStructuredDataProps): WithContext<WebPage> {
  const baseData = generateWebPageStructuredData({
    title,
    description,
    path: PATHS.ABOUT.path,
  })

  return {
    ...baseData,
    about: ORGANIZATION_SCHEMA_BASE,
  }
}
