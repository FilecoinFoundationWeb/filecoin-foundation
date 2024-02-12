import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { Article, WithContext } from 'schema-dts'

import StructuredDataScript from '@/components/StructuredDataScript'

import { CaseStudyData } from '@/types/caseStudyTypes'
import { SeoMetadata } from '@/types/metadataTypes'

import { createMetadata } from '@/utils/createMetadata'
import { baseOrganizationSchema } from '@/utils/structuredData'

import { PATHS, PathValues } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

type Props = {
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

export async function generateMetadata({ params }: Props) {
  const { slug } = params
  const data = getCaseStudyData(slug)

  const seo: SeoMetadata = {
    title: data.title,
    description: data.f_description || '',
  }

  const path: PathValues = `${PATHS.CASE_STUDIES}/${slug}`

  return createMetadata(seo, path)
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
      '@id': `${BASE_URL}${PATHS.CASE_STUDIES}/${data.slug}`,
    },
    ...(typeof baseOrganizationSchema === 'object'
      ? { publisher: baseOrganizationSchema }
      : {}),
  }
}

export default function CaseStudy({ params }: Props) {
  const { slug } = params
  const data = getCaseStudyData(slug)

  return (
    <>
      <StructuredDataScript
        structuredData={createCaseStudyPostStructuredData(data)}
      />

      <h1 className="text-2xl font-bold mb-5">{data.title}</h1>
      <p>{data.f_description}</p>
    </>
  )
}
