import { Article, WithContext } from 'schema-dts'

import { Heading } from '@/components/Heading'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { CaseStudyData } from '@/types/caseStudyTypes'

import { getCaseStudyData } from '@/utils/getCaseStudyData'
import { baseOrganizationSchema } from '@/utils/structuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

type CaseStudyProps = {
  params: {
    slug: string
  }
}
function createCaseStudyPostStructuredData(
  data: CaseStudyData
): WithContext<Article> {
  const { title, publishedOn, updatedOn, description, image, slug } = data

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image?.url,
    datePublished: publishedOn,
    dateModified: updatedOn || publishedOn,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.CASE_STUDIES.path}/${slug}`,
    },
    ...(typeof baseOrganizationSchema === 'object'
      ? { publisher: baseOrganizationSchema }
      : {}),
  }
}

export default function CaseStudy({ params }: CaseStudyProps) {
  const { slug } = params
  const data = getCaseStudyData(slug)
  const { title, description } = data

  return (
    <>
      <StructuredDataScript
        structuredData={createCaseStudyPostStructuredData(data)}
      />
      <header>
        <Heading tag="h1" variant="2xl">
          {title}
        </Heading>
      </header>

      {description && <p>{description}</p>}
    </>
  )
}
