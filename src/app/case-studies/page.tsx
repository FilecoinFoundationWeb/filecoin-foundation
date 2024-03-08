import { WebPage, WithContext } from 'schema-dts'

import { CaseStudiesList } from '@/components/CaseStudiesList'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getCaseStudiesData } from '@/utils/getCaseStudyData'
import {
  baseOrganizationSchema,
  generateWebPageStructuredData,
} from '@/utils/structuredData'

import { attributes } from '@/content/pages/case-studies.md'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

const { title, description, seo } = attributes
export const metadata = createMetadata(seo, PATHS.CASE_STUDIES.path)

const caseStudies = getCaseStudiesData()

const caseStudiesPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  path: PATHS.CASE_STUDIES.path,
  description: seo.description,
})

const caseStudiesPageStructuredData: WithContext<WebPage> = {
  ...caseStudiesPageBaseData,
  publisher: baseOrganizationSchema,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: caseStudies.slice(0, 5).map((caseStudy, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        headline: caseStudy.title,
        description: caseStudy.description,
        image: caseStudy.image
          ? { '@type': 'ImageObject', url: caseStudy.image.url }
          : undefined,
        url: `${BASE_URL}${PATHS.CASE_STUDIES}/${caseStudy.slug}`,
      },
    })),
  },
}

export default function CaseStudies() {
  return (
    <>
      <StructuredDataScript structuredData={caseStudiesPageStructuredData} />
      <PageHeader title={title} description={description} />
      <CaseStudiesList caseStudies={caseStudies} />
    </>
  )
}
