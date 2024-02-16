import { WebPage, WithContext } from 'schema-dts'

import PageHeader from '@/components/PageHeader'
import StructuredDataScript from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { CaseStudyData } from '@/types/caseStudyTypes'

import { createMetadata } from '@/utils/createMetadata'
import { getMarkdownData } from '@/utils/getMarkdownData'
import {
  baseOrganizationSchema,
  generateWebPageStructuredData,
} from '@/utils/structuredData'

import { attributes } from '@/content/pages/case-studies.md'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.CASE_STUDIES.path)

const caseStudies: CaseStudyData[] = getMarkdownData(
  PATHS.CASE_STUDIES.entriesContentPath as string
)

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
        description: caseStudy.f_description,
        image: caseStudy.f_image
          ? { '@type': 'ImageObject', url: caseStudy.f_image.url }
          : undefined,
        url: `${BASE_URL}${PATHS.CASE_STUDIES}/${caseStudy.slug}`,
      },
    })),
  },
}

function CaseStudyListItem({ caseStudy }: { caseStudy: CaseStudyData }) {
  return (
    <li>
      <TextLink href={`${PATHS.CASE_STUDIES.path}/${caseStudy.slug}`}>
        <h3>{caseStudy.title}</h3>
      </TextLink>
      <p>{caseStudy.f_description}</p>
    </li>
  )
}

export default function CaseStudies() {
  return (
    <>
      <StructuredDataScript structuredData={caseStudiesPageStructuredData} />
      <PageHeader title={title} description={description} />

      <main>
        <ul>
          {caseStudies.map((caseStudy) => (
            <CaseStudyListItem key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </ul>
      </main>
    </>
  )
}
