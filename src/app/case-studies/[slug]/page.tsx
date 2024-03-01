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

  if (!data.title) {
    throw new Error('Missing required case study data fields')
  }

  return {
    title: data.title,
    slug,
    description: data.description,
  }
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
  const { title } = data

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

      <p>{data.description}</p>
    </>
  )
}
