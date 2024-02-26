import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { Article, WithContext } from 'schema-dts'

import { Heading } from '@/components/Heading'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { CaseStudyData } from '@/types/caseStudyTypes'

import { generateDynamicContentMetadata } from '@/utils/generateDynamicContentMetadata'
import { baseOrganizationSchema } from '@/utils/structuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

type CaseStudyProps = {
  params: {
    slug: string
  }
}

function getCaseStudyData(slug: string): CaseStudyData {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'case-studies',
    `${slug}.md`
  )

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found for slug: ${slug}`)
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)

  return data as CaseStudyData
}

export async function generateMetadata({ params }: CaseStudyProps) {
  const { slug } = params
  const data = getCaseStudyData(slug)

  return generateDynamicContentMetadata({
    basePath: PATHS.CASE_STUDIES.path,
    slug,
    data,
  })
}

function createCaseStudyPostStructuredData(
  data: CaseStudyData
): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.f_description,
    image: data.f_image?.url || '',
    datePublished: data.date,
    dateModified: data['updated-on'] || data.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.CASE_STUDIES.path}/${data.slug}`,
    },
    ...(typeof baseOrganizationSchema === 'object'
      ? { publisher: baseOrganizationSchema }
      : {}),
  }
}

export default function CaseStudy({ params }: CaseStudyProps) {
  const { slug } = params
  const data = getCaseStudyData(slug)

  return (
    <>
      <StructuredDataScript
        structuredData={createCaseStudyPostStructuredData(data)}
      />
      <header>
        <Heading tag="h1" variant="2xl">
          {data.title}
        </Heading>
      </header>
      <p>{data.f_description}</p>
    </>
  )
}
