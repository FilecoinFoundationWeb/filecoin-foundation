import type { BlogPosting, WithContext } from 'schema-dts'

import { generateBlogPostStructuredData } from '@filecoin-foundation/utils/generateBlogPostStructuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'
import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import type { MonthlyUpdate } from '../../types/monthlyUpdateType'

export function generateStructuredData(
  data: MonthlyUpdate,
): WithContext<BlogPosting> {
  return generateBlogPostStructuredData({
    ...data,
    organizationName: ORGANIZATION_NAME,
    baseUrl: BASE_URL,
    basePath: PATHS.FIL_PLUS_MONTHLY_UPDATES.path,
    organizationSchema: ORGANIZATION_SCHEMA_BASE,
  })
}
